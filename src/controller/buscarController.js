import { Router } from "express";
import { buscarProduto} from "../repository/buscarRepository.js";

let endpoints = Router();

endpoints.get('/buscar/produtos', async (req, resp) => {
    try {
        let nomeProduto = req.query.nomeProduto;
        let r = await buscarProduto(nomeProduto);
        resp.send(r);
    }catch(err) {
        resp.status(404).send({erro: err.message})
    }
})

export default endpoints;
