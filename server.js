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
            "id": "id_server_1",
            "url": "url_server_1"
        },
        {
            "id": "id_server_2",
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

app.put("/info", function (res, req){
    console.log(req.body) 
    bancodedados.push(req.body);    
    //res.sendStatus(200)
    res.send(bancodedados); 
})

app.post("/info", function(req, res){
    bancodedados = req.body;
    //bancodedados.push(req.body)
    res.send(bancodedados)
})

app.get("/recurso", function(req, res){
    
    res.send({"ocupado": false})  

})

app.post("/recurso", function(req,res){
    function recurso() {
        setTimeout(recurso => res.sendStatus(200) , 10000)
        //console.log({"ocupado": true})
    }
    recurso();
      
})

app.get("/eleicao", function(req,res){
//algoritmo valetaõ
//algoritmo anel
    /*{
        "tipo_eleicao": "valentao",
        "eleicao_em_andamento": false
    } */
})

app.post("/eleicao", function(req, res){
//algoritmo valetaõ
//algoritmo anel
})

app.post('/eleicao/coordenador', function(req, res){
   /* {
        "coordenador": 2,
        "id_eleicao": "o id da eleicaoo"
    }*/
})

const server = app.listen(3000, () => {
    console.log("Servidor rodando local na porta 3000");
})
/*const server = app.listen(parseInt(process.argv[2], '0.0.0.0'), () => {
    console.log("Servidor rodando local na porta 3000");
})*/


