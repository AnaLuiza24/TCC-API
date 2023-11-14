import { Router } from "express";
import {  ConsultarAcessorios, ListarTodosAcessorios } from '../repository/acessoriosRepository.js';


let endpoints = Router();

endpoints.get('/consultar/acessorios', async (req, resp) => {
    try{
        let marca = req.query.marca;
        let r = await ConsultarAcessorios(marca);
        resp.send(r);

    }catch(err){
        console.log(err);
        resp.status(500).send({erro: 'Ocorreu um erro'})
    }
});



endpoints.get('/acessorios', async (req, resp) => {
    try{
        let r = await ListarTodosAcessorios();
        resp.send(r);

    }catch(err){
        console.log(err);
        resp.status(500).send({erro: 'Ocorreu um erro'})
    }
});


export default endpoints;