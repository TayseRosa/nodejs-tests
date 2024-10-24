import express from 'express'

const router = express.Router();

router.get('/ping', ( req, res )=>{
    res.json({ pong:true })
})


router.get('/', (req, res)=>{
    console.log("Servidor rodando na porta 3000")
    let name='Tayse';
    let age=100;
    res.json({ name, age })
})




export default router;