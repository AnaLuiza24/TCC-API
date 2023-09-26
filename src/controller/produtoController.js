import { Router } from "express";
import { deletarProduto, listarProduto } from "../repository/produtoRepository.js";

let endpoints = Router();

endpoints.get('/listar/produtos', async (req, resp) => {
    try{
        let r = await listarProduto();
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

export default endpoints;