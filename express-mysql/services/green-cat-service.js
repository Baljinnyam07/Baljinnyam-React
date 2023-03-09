import pool from '../config/mysql-config.js';
import {nanoid} from'nanoid';

export const getCategory = async ()=>{
    const [result] = await pool.query("SELECT * FROM category");
    return result;
}

export const createCategory = async (cat ) =>{
    const id = nanoid();
    const [result] =  await pool.query(`INSERT INTO category (categoryId, name, slug, productCount) VALUES(?,?,?,?)`,[id,cat.name,cat.slug,cat.productCount]);
    return result;
}

export const deleteCategory = async (id)=>{
    try{
    const [result] = await pool.query(`Delete From category WHERE categoryId="${id}"`);
    return result;
   }catch(e){
    console.error(e);
    return null;
   }
}

export const updateCategory = async (name, slug,productCount,categoryId) =>{
    const [result] = await pool.query( `UPDATE category set name=?,slug=?,productCount=? where categoryId=?`,[name, slug,productCount,categoryId])
    return result;
}

export const sortCategory = async (id)=>{
    const [result] = await pool.query( "SELECT * from category where id=?",[id])
    return result.length ? result[0] : null;
}