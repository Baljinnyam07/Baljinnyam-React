import pool from '../config/mysql-config.js';
import {nanoid} from'nanoid';

export const getProductImage = async ()=>{
    const [result] = await pool.query('SELECT * FROM productImage');
    return result;
}

export const createProductImage = async (prodImg) =>{
    const id = nanoid();
    const [result] =  await pool.query(`INSERT INTO productImage (imageId, imageUrl) VALUES(?,?)`,[id,prodImg.imageUrl]);
    return result;
}

export const deleteProductImage = async (id)=>{
    const [result] = await pool.query( `DELETE FROM productImage where imageId="${id}"`)
    return result;
}

export const updateProductImage = async (imageUrl,productId) =>{
    const [result] = await pool.query( `UPDATE productImage set imageUrl=? where imageId=?`,[imageUrl,productId])
    return result;
}

export const sortProductImage = async (id)=>{
    const [result] = await pool.query( `SELECT * from productImage where id=${id}`)
    return result.length ? result[0] : null;
}