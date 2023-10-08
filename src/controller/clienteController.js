import { AdicionarCliente, buscarNome, listarCliente } from "../repository/clienteRepository.js";
import { Router } from "express";

let endpoints = Router();

endpoints.put('/adicionar/cliente', async (req, resp) => {
    try {
        let cliente = req.body;
        let r = await AdicionarCliente(cliente);
        resp.send(r);

    } catch (err) {
        resp.status(404).send({erro: 'Ocorreu um erro'})
    }
})

endpoints.get('/listar/cliente', async (req, resp) => {
    try{
        let nome = req.query.nome;
        let r = await buscarNome(nome);
        resp.send(r);

    }catch(err){
        resp.status(500).send({erro: 'Ocorreu um erro'})
    }
})

endpoints.get('/listar/cliente', async (req, resp) => {
    try{
        let r = await listarCliente();
        resp.send(r);
    }catch(err) {
        resp.status(500).send({erro: 'Ocorreu um erro'})
    }
})


export default endpoints;