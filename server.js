'use strict';

//import {http} from 'http';
//import {express} from 'express';

import { createServer } from "http";
import express from "express";

const app = express();
app.use(express.json())


let dados ={
    "componente": "server",
    "versao": "0.1",
    "descricao": "serve os clientes com os serviços X, Y e Z",
    "ponto_de_acesso": "https://sd-201620236.herokuapp.com/",
    "status": "up",
    "identificacao": 2,
    "lider": 0,
    "eleicao": "valentao"
}
let bancodedados = [];
bancodedados.push(dados)


app.get("/", function(req, res){
    res.send("<h1> Servidor rodando local na porta 3000</h1>");
});

app.get("/info", function(req, res){
    res.send(bancodedados);
});

app.post("/info", function(req, res){
    console.log(req.body)
    bancodedados.push(req.body);    
    res.sendStatus(200)
    //res.send(bancodedados);  
})

app.get("/recurso", function(req, res){
    req.setTimeout(10000,()=>{
        //res.sendStatus(200) 
    })
    res.send({"ocupado": false})  
})

app.post("/recurso", function(req,res){

})

app.get("/eleicao", function(req,res){
//algoritmo valetaõ
//algoritmo anel
//{
//    "tipo_eleicao": "valentao",
//    "eleicao_em_andamento": false

//} 
})

app.post("/eleicao", function(req, res){
//algoritmo valetaõ
//algoritmo anel
})

app.post('/eleicao/coordenador')


const server = app.listen(3000, () => {
    console.log("Servidor rodando local na porta 3000");
})


