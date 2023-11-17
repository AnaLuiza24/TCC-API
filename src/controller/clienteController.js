import { AdicionarCliente, buscarNome, verificarLogin, consultar,alterarcliente,alterarsenha } from "../repository/clienteRepository.js";
import { Router } from "express";

let endpoints = Router();

endpoints.post('/cliente/adicionar', async (req, resp) => {
    try {
        let cliente = req.body;

        if(!cliente.nome)
        throw new Error('Nome obrigatório')

        if(!cliente.email)
        throw new Error('Email obrigatório')

        if(!cliente.email.includes('@'))
            throw new Error('Email Inválido');

        if(!/mail\.com$/i.test(cliente.email))
            throw new Error('Email Inválido');

        if(!cliente.senha)
        throw new Error('Senha obrigatória');

        let r1 = await consultar(cliente.email);
        if (r1.length > 0)
            throw new Error(' Email já cadastrado!');

        if (!cliente.telefone)
            throw new Error('Telefone Inválido');

        let r = await AdicionarCliente(cliente);
        resp.send(r);

    } catch (err) {
        resp.status(404).send({erro: err.message})
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


  endpoints.get('/listar/cliente', async (req, resp) => {
    try{
        let nome = req.query.nome;
        let r = await buscarNome(nome);
        resp.send(r);

    }catch(err){
        resp.status(500).send({erro: 'Ocorreu um erro'})
    }
})

endpoints.put('/cliente', async (req, resp) => {
    
    try {
        
        let cliente = req.body; 
        let resposta = await alterarcliente(cliente);
        resp.send(resposta);
 
    }


    catch(err) {
        resp.status(404).send({erro: err.message})
    }

})
endpoints.put('/cliente/senha', async (req, resp) => {
    
    try {
        
        let cliente = req.body; 
        let resposta = await alterarsenha(cliente);
        resp.send(resposta);
 
    }


    catch(err) {
        resp.status(404).send({erro: err.message})
    }

})


export default endpoints;