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
    const {name, slug} =req.body;
    try{
        res.json(await createProduct({name,slug}))
    }catch(err){
        res.status(400).json("Something went wrong")
    }
})

router.delete('/:productId', async(req,res)=>{
    const {productId} = req.params;
    try{
        res.json(await deleteProduct(productId))
    }catch(err){
        res.status(400).json('Something went wrong')
    }
})

router.put('/:productId', async(req,res)=>{
    const {productId} = req.params;
    const {name, slug} = req.body;
    try{
        res.json(await updateProduct(name, slug, productId))
    }catch(err){
        res.status(400).json('Something went wrong')
    }
})

export default router