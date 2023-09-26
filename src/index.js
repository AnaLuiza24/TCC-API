import  'dotenv/config';
import express from 'express';
import cors from 'cors';
import clienteController from './controller/clienteController.js';
import admController from './controller/admController.js';
import produtoController from './controller/produtoController.js';

let server = express();
server.use(cors());
server.use(express.json());
server.use(admController);
server.use(clienteController);
server.use(produtoController);

server.listen(process.env.PORT, 
() => console.log(`API disponível na porta ${process.env.PORT}`));