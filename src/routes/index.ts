import express, { RequestHandler } from 'express'
import produtosRouter from './produtos'

const router = express.Router();

const meuMidleware:RequestHandler = (req, res, next)=>{
    console.log('middleware executou')
    next();//Pode prosseguir
}

router.use('/produtos', produtosRouter)

router.get('/ping', meuMidleware, ( req, res )=>{
    console.log('Executou o ping')
    res.json({ pong:true })
})


router.get('/', (req, res)=>{
    console.log("Servidor rodando na porta 3000")
    let name='Tayse';
    let age=100;
    res.json({ name, age })
})




export default router;