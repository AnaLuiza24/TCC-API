import { Router } from "express";


let endpoints = Router();

endpoints.get('/listar/acessorios', async (req, resp ) => {
    try {
        



    }catch (err) {
        resp.status(404).send({erro: err.message})
    }
})