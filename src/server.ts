import express from 'express'
import helmet from 'helmet'
import path from 'path'
import router from './routes'
import { errorHandler, notFoundRequest } from './routes/errorhandler';

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static(path.join(__dirname, '../public')))


server.use('/', router);
//Manter no final do arquivo
server.use(notFoundRequest);//url que nao existe
server.use(errorHandler);//rota de erros

server.listen(3000, ()=>{
    console.log('Servidor rodando na porta http://localhost:3000')
})

