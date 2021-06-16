'use strict';

import express from "express";
import { info } from "console";
//import { send } from "process";
import {Worker, isMainThread, parentPort, workerData} from 'worker_threads'
import { setTimeout } from "timers";

const app = express();
app.use(express.json())

var lock;

let dados ={
    "componente": "server",
    "versao": "0.1",
    "descricao": "serve os clientes com os serviços X, Y e Z",
    "ponto_de_acesso": "https://sd-201620236.herokuapp.com/",
    "status": "up",
    "identificacao": 2,
    "lider": 0,
    "eleicao": "valentao",
    "servidores_conhecidos":[
        {
            "id": "ramon",
            "url": "url_server_1"
        },
        {
            "id": "adrian",
            "url": "url_server_2"
        }
    ]
}
let bancodedados = [];
bancodedados.push(dados)


app.get("/", function(req, res){
    res.send("<h1> Servidor rodando local na porta 3000</h1>");
});

app.get("/info", function(req, res){
    res.send(bancodedados);
});

/*app.put("/info", function (res, req){
    console.log(req.body) 
    bancodedados.push(req.body);    
    //res.sendStatus(200)
    res.send(bancodedados); 
})*/

app.post("/info", function(req, res){
    bancodedados = req.body;
    console.log(bancodedados)
    //bancodedados.push(req.body)
    res.send(bancodedados)
})

app.get("/recurso", function(req, res){
    
    res.send({"ocupado": false})  

})

app.post("/recurso", function(req,res){
    
    setTimeout(()=>res.status(409).send({"ocupado": true}), 5000)
    //req.isPaused()
    /*function recursoOcupado() {
        setTimeout(()=>res.status(409).send({"ocupado": true}), 5000)
        //setTimeout(recurso => res.setTimeout() , 10000)
         console.log({"ocupado": true})
    }
    recursoOcupado();
    function recursoNotOcupado() {
        setTimeout(()=>res.status(200), 5000)
        //setTimeout(recurso => res.setTimeout() , 10000)
        console.log({"ocupado": false})
    }
    recursoOcupado();
    recursoNotOcupado();*/
    //res.sendStatus(200)
      
})

app.get("/eleicao", function(req,res){
    res.send({
        "tipo_eleicao": "valentao",
        "eleicao_em_andamento": false
    })
    // isso tem q ter
})

app.post("/eleicao", function(req, res){
    res.sendStatus(403)
    //bancodedados= req.body ;
    //console.log(bancodedados)
    //não vai precisar fazer
//algoritmo valetaõ
//algoritmo anel
})

app.post('/eleicao/coordenador', function(req, res){
    res.send(
        {
            "coordenador": 2,
            "id_eleicao": "o id da eleicaoo"
        }
    )
    /* */
})

/*const server = app.listen(3000, () => {
    console.log("Servidor rodando local na porta 3000");
})*/
const server = app.listen(parseInt(process.argv[2], '0.0.0.0'), () => {
    console.log("Servidor rodando local na porta 3000");
}) 


