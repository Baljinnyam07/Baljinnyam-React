import pool from '../config/mysql-config.js';

export const getCategories = async ()=>{
    const [result] = await pool.query("SELECT * FROM category");
    return result;
}

export const createCategories = async (name, slug, imgUrl) =>{
    const [result] =  await pool.query(`INSERT INTO category (name, slug, imgUrl) VALUES(?,?,?)`,[name,slug,imgUrl]);
    return result;
}

export const deleteCategories = async (id)=>{
    const [result] = await pool.query( `DELETE FROM category where id=?`,[id])
    return result;
}

export const updateCategories = async (name, slug, imgUrl, id) =>{
    const [result] = await pool.query( `UPDATE category set name='${name}',slug='${slug}',imgUrl='${imgUrl}' where id=${id}`)
    return result;
}

export const sortCategories = async (id)=>{
    const [result] = await pool.query( "SELECT * from category where id=?",[id])
    return result.length ? result[0] : null;
}