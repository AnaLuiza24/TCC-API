import { Router } from "express";
import { TodosSmartphones } from "../repository/celularesRepository";

let endpoints = Router();

endpoints.get('/smartphone/listar', async (req, resp) => {
    try{
        let {marca} = req.query;
        let r = await TodosSmartphones(marca);
        resp.send(r);

    }catch(err){
        resp.status(500).send({erro: "Ocorreu um erro"});
    }
}) 