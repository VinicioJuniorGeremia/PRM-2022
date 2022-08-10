import { AppDataSource } from './data-source';
import express from 'express';
import cors from 'cors';

//instancio uma aplicação express
const app = express(); 

//Determina a porta de execução
const PORT = 3300;

//Middleware
app.use(cors());
app.use(express.json());

AppDataSource.initialize()
    .then(() => {


        app.listen(PORT, () => {
            console.log(`Ops ocorreu um erro.`);
            console.error(console.error());
        })
    });
