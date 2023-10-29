import { loginAdm } from "../repository/admRepository.js";
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

export default endpoints;