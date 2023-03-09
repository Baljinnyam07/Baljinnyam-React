import pool from '../config/mysql-config.js';
import {nanoid} from'nanoid';

export const getProductReview = async ()=>{
    const [result] = await pool.query('SELECT * FROM productReview');
    return result;
}

export const createProductReview = async (prodRev) =>{
    const id = nanoid();
    const [result] =  await pool.query(`INSERT INTO productReview (reviewId, rating) VALUES(?,?)`,[id,prodRev.rating]);
    return result;
}

export const deleteProductReview = async (id)=>{
    const [result] = await pool.query( `DELETE FROM productReview where reviewId="${id}"`)
    return result;
}

export const updateProductReview = async (rating,reviewId) =>{
    const [result] = await pool.query( `UPDATE productReview set rating=? where reviewId=?`,[rating,reviewId])
    return result;
}

export const sortProductReview = async (id)=>{
    const [result] = await pool.query( `SELECT * from productproductReviewReview where id=${id}`)
    return result.length ? result[0] : null;
}