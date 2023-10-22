import { adicionarEndereco } from "../repository/pedidoRepository.js";
import { Router } from "express";

let endpoints = Router();

endpoints.post('/endereco', async (req, resp) => {
    try{
        let endereco = req.body;
        let r = await adicionarEndereco(endereco);
        resp.send(r);

    }catch(err){
        resp.status(404).send({erro: "Ocorreu um erro"});
    }
});

export default endpoints;