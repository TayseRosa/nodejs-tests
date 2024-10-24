import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ produtos: [] })
})

router.get('/:id', ( req, res )=>{
    let val = (req.params)
    console.log(val)    
    res.json({ name:'Tayse Rosa', price:val });
})


export default router;