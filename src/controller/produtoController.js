import { Router } from "express";
import { deletarProduto,  adicionarProduto, listarMarcas, listarCategorias, nomeProduto, listarSmartphones, listarPorMarca, consultarProduto } from "../repository/produtoRepository.js";

let endpoints = Router();

endpoints.get('/categoria/listar', async (req, resp) => {
    try{
        let r = await listarCategorias();
        resp.send(r);

    }catch(err){
        resp.status(500).send({erro: 'Ocorreu um erro'})
    }
})

endpoints.get('/marcas/listar', async (req, resp) => {
    try{
        let r = await listarMarcas();
        resp.send(r);


    }catch(err){
        resp.status(500).send({erro: 'Ocorreu um erro'})
    }
})

endpoints.get('/listar/produtos', async (req, resp) => {
    try{
        let nome = req.query.nome;
        let r = await nomeProduto(nome);
        resp.send(r);

    }catch(err) {
        resp.status(500).send({erro: 'Ocorreu um erro'})
    }
})

endpoints.delete('/deletar/:id', async (req, resp) => {
    try{
        let {id} = req.params;
        let r = await deletarProduto(id);
        resp.send();


    }catch(err) {
        resp.status(404).send({erro: 'Ocorreu um erro'})
    }
})

endpoints.post('/produto', async (req, resp) => {
    try{
        let produto = req.body;

        if(!produto.marca === 0) 
        throw new Error('Selecione a marca do produto');
    
        if(!produto.categoria === 0) 
        throw new Error('Selecione uma categoria');

        if(!produto.nome) 
        throw new Error('Nome do produto é obrigatório');

        if(!produto.preco) 
        throw new Error('Preço do produto é obrigatório');

        if(!produto.cor) 
        throw new Error('Cor do produto é obrigatório');

        if(!produto.qtd) 
        throw new Error('Informe a quantia em estoque');

        if(!produto.desc) 
        throw new Error('Descrição do produto é obrigatório');

        let r1 = await consultarProduto(produto.nome);

        if (r1.length > 0)
        throw new Error('Produto já cadastrado!');

        let r = await adicionarProduto(produto);
        resp.send(r);

    }catch(err) {
        resp.status(404).send({erro: err.message})
    }

})

endpoints.post('/detalhe', async (req, resp) => {
    try{
        let detalhe = req.body;

        let r = await adicionarDetalhe(detalhe);
        resp.send(r)

    }catch(err){
        resp.status(404).send({erro: 'Ocorreu um erro'})
    }
})

endpoints.get('/smartphones/listar', async (req, resp) => {
    try{
        let {marca} = req.query
        let r = await listarPorMarca(marca);
        resp.send(r);

    }catch(err){
        resp.status(500).send({erro: "Ocorreu um erro"})
    }
})

endpoints.get('/smartphones', async (req, resp) => {
    try{
        let r = await listarSmartphones();
        resp.send(r);

    }catch(err){
        resp.status(500).send({erro: "Ocorreu um erro"})
    }
})

export default endpoints;