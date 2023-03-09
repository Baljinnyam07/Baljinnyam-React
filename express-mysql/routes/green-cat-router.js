import express from 'express';
import { createCategory, deleteCategory, getCategory, sortCategory, updateCategory } from '../services/green-cat-service.js';

const router = express.Router();

router.get('/', async (req,res)=>{
    res.json(await getCategory());
});
router.get("/:id", async (req,res)=>{
     const { id } = req.params;
    try{
        res.json(await sortCategory(id));
    }catch(err){
        res.status(400).json('Something went wrong')
    }
});

router.post('/', async(req, res)=>{
    const {name, slug, productCount} =req.body;
    try{
        res.json(await createCategory({name,slug, productCount}))
    }catch(err){
        res.status(400).json("Something went wrong")
    }
})

router.delete("/:categoryId", async(req,res)=>{
    const { categoryId } = req.params;
  res.json(await deleteCategory(categoryId));
})

router.put('/:categoryId', async(req,res)=>{
    const {categoryId}=req.params;
    const {name, slug, productCount } = req.body;
    try{
      const result = await updateCategory(name,slug, productCount, categoryId)
      res.json(result)
    }catch(err){
      console.log(err);
      res.status(400).json('haha')
    }
})

export default router