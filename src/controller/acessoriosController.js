import { Router } from "express";
import { ListarTodosAcessorios, ConsultarAcessorios} from '../repository/acessoriosRepository.js';


let endpoints = Router();

endpoints.get('/acessorios/:pagina', async (req, resp) => {
    try{
        const pagina = req.params.pagina;
        const r = await ListarTodosAcessorios(pagina);
        resp.send(r);

    }catch(err){
        console.log(err);
        resp.status(500).send({erro: 'Ocorreu um erro'})
    }
});

endpoints.get('/acessorios/:marca', async (req, resp) => {
    try{
        let {marca} = req.params;
        let r = await ConsultarAcessorios(marca);
        resp.send(r);
        
    }catch(err){
        resp.status(500).send({erro: "Ocorreu um erro"});
    }
})


export default endpoints;