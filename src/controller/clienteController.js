import { AdicionarCliente, buscarNome, listarCliente,verificarLogin } from "../repository/clienteRepository.js";
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

endpoints.post('/login', async (req, resp) => {
    try {
      let {email,senha} = req.body;
  
  
      let resposta = await verificarLogin(email,senha)
  
      if(!email)
      throw new Error('Email obrigatório')
  
      if(!senha)
      throw new Error('Email obrigatório')
  
      if(!resposta)
        throw new Error('Senha ou Email incorretos');
  
        resp.send(resposta);
      
    } catch (err) {
      resp.status(500).send({erro: err.message});
    }
  });




export default endpoints;