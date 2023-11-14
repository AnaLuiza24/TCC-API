import { Router } from "express";
import {  ConsultarAcessorios, ListarTodosAcessorios, ProdutoAcessorios} from '../repository/acessoriosRepository.js';


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

endpoints.get('/acessorios/:marca', async (req, resp) => {
    try{
        let {marca} = req.params;
        let r = await ProdutoAcessorios(marca);
        resp.send(r);
        
    }catch(err){
        resp.status(500).send({erro: "Ocorreu um erro"});
    }
})


export default endpoints;