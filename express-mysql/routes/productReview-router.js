import express from 'express';
import { createProductReview, deleteProductReview, getProductReview, sortProductReview, updateProductReview } from '../services/productReview-service.js';


const router = express.Router();

router.get('/', async (req,res)=>{
    res.json(await getProductReview());
});
router.get('/:id', async (req,res)=>{
     const { id } = req.params;
    try{
        res.json(await sortProductReview(id));
    }catch(err){
        res.status(400).json('Something went wrong')
    }
});

router.post('/', async(req, res)=>{
    const {rating} =req.body;
    try{
        res.json(await createProductReview({rating}))
    }catch(err){
        res.status(400).json("hi")
    }
})

router.delete('/:reviewId', async(req,res)=>{
    const {reviewId} = req.params;
    try{
        res.json(await deleteProductReview(reviewId))
    }catch(err){
        res.status(400).json('Something went wrong')
    }
})

router.put('/:reviewId', async(req,res)=>{
    const {reviewId} = req.params;
    const {rating} = req.body;
    try{
        res.json(await updateProductReview(rating, reviewId))
    }catch(err){
        res.status(400).json('Something went wrong')
    }
})

export default router