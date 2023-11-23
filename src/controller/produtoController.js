import { Router } from "express";
import multer from "multer";
import { deletarProduto, adicionarProduto, listarMarcas, listarCategorias, buscarPorNomeProduto, consultarProduto, alterarImageUm, alterarImageDois, alterarProduto, listarProdutosinicio, buscarProdutoPorId, buscarPorProduto } from "../repository/produtoRepository.js";

let endpoints = Router();
let upload = multer({ dest: 'storage/produtos' })

endpoints.get('/produto/busca', async (req, resp) => {
    try {
        const { nome } = req.query;

        const resposta = await buscarPorProduto(nome);

        if (resposta.length == 0)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/categoria/listar', async (req, resp) => {
    try {
        let r = await listarCategorias();
        resp.send(r);

    } catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro' })
    }
})

endpoints.get('/marcas/listar', async (req, resp) => {
    try {
        let r = await listarMarcas();
        resp.send(r);


    } catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro' })
    }
})

endpoints.get('/api/produto', async (req, resp) => {
    try {
        let r = await listarProdutosinicio();
        resp.send(r);

    } catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro' })
    }
})

endpoints.get('/listar/produtos', async (req, resp) => {
    try {
        let nome = req.query.nome;
        let r = await buscarPorNomeProduto(nome);
        resp.send(r);

    } catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro' })
    }
})

endpoints.delete('/deletar/:id', async (req, resp) => {
    try {
        let { id } = req.params;
        let r = await deletarProduto(id);
        resp.send();


    } catch (err) {
        resp.status(404).send({ erro: 'Ocorreu um erro' })
    }
})

endpoints.post('/produto', async (req, resp) => {
    try {
        let produto = req.body;

        if (produto.marca === 0 || produto.marca === undefined)
            throw new Error('Selecione a marca do produto');

        if (produto.categoria === 0 || produto.categoria === undefined)
            throw new Error('Selecione uma categoria');

        if (!produto.nome)
            throw new Error('Nome do produto é obrigatório');

        if (!produto.preco)
            throw new Error('Preço do produto é obrigatório');

        if (!produto.cor)
            throw new Error('Cor do produto é obrigatório');

        if (produto.qtd < 0 || produto.qtd === undefined)
            throw new Error('Informe a quantia em estoque');

        if (!produto.desc)
            throw new Error('Descrição do produto é obrigatório');

        if (!produto.precopromo)
            throw new Error('Preço Promocional do produto é obrigatório');

        let r1 = await consultarProduto(produto.nome);

        if (r1.length > 0)
            throw new Error('Produto já cadastrado!');

        let r = await adicionarProduto(produto);
        resp.send(r);

    } catch (err) {
        resp.status(404).send({ erro: err.message })
    }

})

endpoints.put('/alterar/:id/imagemum', upload.single('fotoProduto'), async (req, resp) => {
    try {
        let { id } = req.params;
        let imagem = req.file.path;


        let r = await alterarImageUm(imagem, id);

        if (r != 1) {
            throw new Error('A imagem não pode ser salva')
        }

        resp.status(204).send();

    }
    catch (err) {
        resp.status(404).send({ erro: err.message })
    }

})

endpoints.put('/alterar/:id/imagemdois', upload.single('fotoProduto'), async (req, resp) => {
    try {
        let { id } = req.params;
        let imagem = req.file.path;


        let r = await alterarImageDois(imagem, id);

        if (r != 1)
            throw new Error('A imagem não pode ser salva')

        resp.status(204).send();

    } catch (err) {
        resp.status(404).send({ erro: err.message })
    }

})

endpoints.put('/produto/:id', async (req, resp) => {
    try {
        let {id} = req.params;
        let produto = req.body;

        let r = await alterarProduto(id, produto);

        if (produto.marca === 0 )
            throw new Error('Selecione a marca do produto');

        if (produto.categoria === 0)
            throw new Error('Selecione uma categoria');

        if (!produto.nome)
            throw new Error('Nome do produto é obrigatório');

        if (!produto.preco)
            throw new Error('Preço do produto é obrigatório');

        if (!produto.cor)
            throw new Error('Cor do produto é obrigatório');

        if (produto.qtd < 0 || produto.qtd === undefined)
            throw new Error('Informe a quantia em estoque');

        if (!produto.desc)
            throw new Error('Descrição do produto é obrigatório');

        if (!produto.precopromo)
            throw new Error('Preço Promocional do produto é obrigatório');


        if (r != 1)
        throw new Error("O produto não pode ser alterado");

        else
        resp.status(204).send();

    } catch (err) {
        resp.status(404).send({ erro: err.message })
    }
})

endpoints.get('/produto/:id', async (req, resp) => {
    try{
        let {id} = req.params;
        const r = await buscarProdutoPorId(id);

        resp.send(r);

    }catch (err) {
        resp.status(400).send({ erro: err.message })
    }
})


export default endpoints;
