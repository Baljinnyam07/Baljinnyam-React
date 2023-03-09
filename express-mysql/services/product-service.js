import pool from '../config/mysql-config.js';
import {nanoid} from'nanoid';

export const getProduct = async ()=>{
    const [result] = await pool.query('SELECT * FROM product');
    return result;
}

export const createProduct = async (prod) =>{
    const id = nanoid();
    const [result] =  await pool.query(`INSERT INTO productImage (productId, name, slug) VALUES(?,?,?)`,[id,prod.name,prod.slug]);
    return result;
}

export const deleteProduct = async (id)=>{
    const [result] = await pool.query( `DELETE FROM product where productId="${id}"`)
    return result;
}

export const updateProduct = async (name, slug, productId) =>{
    const [result] = await pool.query( `UPDATE product set name=?,slug=? where productId=?`,[name,slug,productId])
    return result;
}

export const sortProduct = async (id)=>{
    const [result] = await pool.query( `SELECT * from product where id=${id}`)
    return result.length ? result[0] : null;
}