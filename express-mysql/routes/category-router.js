import express from 'express';
import { createCategories, deleteCategories, getCategories, sortCategories, updateCategories } from '../services/category-service.js';

const router = express.Router();

router.get('/', async (req,res)=>{
    res.json(await getCategories());
});
router.get('/id', async (req,res)=>{
     const {id} = req.body;
    try{
        res.json(await sortCategories(id));
    }catch(err){
        res.status(400).json('Something went wrong')
    }
});

router.post('/', async(req, res)=>{
    const {name, slug, imgUrl} =req.body;
    try{
        res.json(await createCategories(name,slug, imgUrl))
    }catch(err){
        res.status(400).json("Something went wrong")
    }
})

router.delete('/', async(req,res)=>{
    const {id} = req.body;
    try{
        res.json(await deleteCategories(id))
    }catch(err){
        res.status(400).json('Something went wrong')
    }
})

router.put('/', async(req,res)=>{
    const { name, slug, imgUrl, id} = req.body;
    try{
        res.json(await updateCategories(name, slug, imgUrl, id))
    }catch(err){
        res.status(400).json('Something went wrong')
    }
})

export default router