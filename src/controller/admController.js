import { loginAdm } from "../repository/admRepository.js";
import { listarPedidos } from "../repository/admRepository.js";
import { Router } from "express";

let endpoints = Router();

endpoints.post('/adm/login', async (req, resp) => {
  try{
    const {email, senha} = req.body;
    const r = await loginAdm(email, senha);

    if (!r){
      throw new Error('Credenciais inválidas');
    }

     resp.send(r);

  }catch(err){
    resp.status(401).send({erro: err.message});
  }
})

endpoints.get('/adm/listarPedidos', async (req,resp) => {
  
  try {

    let pedido = req.query;
    let r = await listarPedidos(pedido.nome, pedido.produto, pedido.valor, pedido.pagamento, pedido.situacao);
    resp.send(r);

  }


  catch(err){
    resp.status(401).send({erro: err.message});
  }

})

export default endpoints;