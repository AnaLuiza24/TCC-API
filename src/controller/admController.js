import { consultarTodos } from "../repository/admRepository.js";
import { Router } from "express";

let endpoints = Router();

endpoints.get('/consultar', async (req, resp) => {
    try {
        let {email, senha} = req.query ?? ''
        let r = await consultarTodos(email, senha);
        resp.send(r);
    }
    catch (err) {
      resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
  })

  export default endpoints;