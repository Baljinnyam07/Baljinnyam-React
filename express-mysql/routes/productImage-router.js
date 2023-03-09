import express from 'express';
import { createProductImage, deleteProductImage, getProductImage, sortProductImage, updateProductImage } from '../services/productImage-service.js';


const router = express.Router();

router.get('/', async (req,res)=>{
    res.json(await getProductImage());
});
router.get('/:id', async (req,res)=>{
     const { id } = req.params;
    try{
        res.json(await sortProductImage(id));
    }catch(err){
        res.status(400).json('Something went wrong')
    }
});

router.post('/', async(req, res)=>{
    const {imageUrl} =req.body;
    try{
        res.json(await createProductImage({imageUrl}))
    }catch(err){
        res.status(400).json("Something went wrong")
    }
})

router.delete('/:imageId', async(req,res)=>{
    const {imageId} = req.params;
    try{
        res.json(await deleteProductImage(imageId))
    }catch(err){
        res.status(400).json('Something went wrong')
    }
})

router.put('/:imageId', async(req,res)=>{
    const {imageId} = req.params;
    const {imageUrl} = req.body;
    try{
        res.json(await updateProductImage(imageUrl, imageId))
    }catch(err){
        res.status(400).json('Something went wrong')
    }
})

export default router