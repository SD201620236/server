//import {http} from 'http';
//import {express} from 'express';

import { createServer } from "http";
import express from "express";

const app = express();

app.get("/", function(req, res){
    res.send("<h1> Servidor rodando local na porta 3000</h1>");
});

//https://github.com/SD201620236/resourcemanager 

app.get("/info", function(req, res){
    res.send({
        "componente": "server",
        "versao": "0.1",
        "descrição": "serve os clientes com os serviços X, Y e Z",
        "ponto_de_acesso": "https://sd-201620236.herokuapp.com/",
        "status": "up",
        "identificacao": 2,
        "lider": 0,
        "eleicao": "valentao"
    });
});

const server = app.listen(parseInt(process.argv[2]), '0.0.0.0', () => {
    console.log("Servidor rodando local na porta 3000");
})


