import pool from '../config/mysql-config.js';

export const getProduct = async ()=>{
    const [result] = await pool.query('SELECT * FROM product');
    return result;
}

export const createProduct = async (name, slug, imgUrl) =>{
    const [result] =  await pool.query(`INSERT INTO product (name, slug, imgUrl) VALUES(?,?,?)`,[name,slug,imgUrl]);
    return result;
}

export const deleteProduct = async (id)=>{
    const [result] = await pool.query( `DELETE FROM product where id=?`,id)
    return result;
}

export const updateProduct = async (name, slug, imgUrl, id) =>{
    const [result] = await pool.query( `UPDATE product set name='${name}',slug='${slug}',imgUrl='${imgUrl}' where id=${id}`)
    return result;
}

export const sortProduct = async (id)=>{
    const [result] = await pool.query( `SELECT * from product where id=${id}`)
    return result.length ? result[0] : null;
}