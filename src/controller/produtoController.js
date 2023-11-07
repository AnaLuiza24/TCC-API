import { Router } from "express";
import { deletarProduto,  adicionarProduto, listarMarcas, listarCategorias, nomeProduto, adicionarDetalhe, listarSmartphones, listarPorMarca } from "../repository/produtoRepository.js";

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

        let dados = await adicionarProduto(produto);
        resp.send(dados);

    }catch(err) {
        resp.status(404).send({erro: 'Ocorreu um erro'})
    }

})

endpoints.post('/detalhe', async (req, resp) => {
    try{
        let detalhe = req.body;

        let dados = await adicionarDetalhe(detalhe);
        resp.send(dados)

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