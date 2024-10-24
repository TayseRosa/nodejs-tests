import express from 'express'

const server = express();

server.get('/', (req, res)=>{
    res.send('Olá mundo de novo | Hello World again')
})

server.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000")
})