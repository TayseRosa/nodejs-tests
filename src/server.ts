import { createServer } from "node:http"

const server = createServer((req, res)=>{
    res.end("Ola mundo! | Hello World!");
})

server.listen(3000, ()=>{
    console.log('Servidor funcionando...')
})