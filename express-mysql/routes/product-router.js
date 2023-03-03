import express from 'express';
import { createProduct, deleteProduct, getProduct, sortProduct, updateProduct } from '../services/product-service.js';

const router = express.Router();

router.get('/', async (req,res)=>{
    res.json(await getProduct());
});
router.get('/:id', async (req,res)=>{
     const { id } = req.params;
    try{
        res.json(await sortProduct(id));
    }catch(err){
        res.status(400).json('Something went wrong')
    }
});

router.post('/', async(req, res)=>{
    const {name, slug, imgUrl} =req.body;
    try{
        res.json(await createProduct(name,slug, imgUrl))
    }catch(err){
        res.status(400).json("Something went wrong")
    }
})

router.delete('/:id', async(req,res)=>{
    const {id} = req.params;
    try{
        res.json(await deleteProduct(id))
    }catch(err){
        res.status(400).json('Something went wrong')
    }
})

router.put('/:id', async(req,res)=>{
    const {id} = req.params;
    const {name, slug, imgUrl} = req.body;
    try{
        res.json(await updateProduct(name, slug, imgUrl, id))
    }catch(err){
        res.status(400).json('Something went wrong')
    }
})

export default router