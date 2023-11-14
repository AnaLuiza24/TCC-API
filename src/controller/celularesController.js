import { Router } from "express";
import { ConsultarSmartphones, listarSmartphones } from "../repository/celularesRepository.js";

let endpoints = Router();

endpoints.get('/smartphone/:marca', async (req, resp) => {
    try{
        let {marca} = req.params;
        let r = await ConsultarSmartphones(marca);
        resp.send(r);

    }catch(err){
        resp.status(500).send({erro: "Ocorreu um erro"});
    }
})

endpoints.get('/smartphones', async (req, resp) => {
    try{
        let r = await listarSmartphones();
        resp.send(r);

    }catch(err) {
        resp.status(500).send({erro: "Ocorreu um erro"});
    }
})

export default endpoints;