import { Router } from "express";
import {  ConsultarAcessorios } from '../repository/acessoriosRepository.js';


let endpoints = Router();

endpoints.get('/consultar/acessorios', async (req, resp) => {
    try{
        let produto = req.query.produto;
        let r = await ConsultarAcessorios(produto);
        resp.send(r);

    }catch(err){
        resp.status(500).send({erro: 'Ocorreu um erro'})
    }
});



export default endpoints;