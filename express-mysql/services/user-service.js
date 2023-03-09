import pool from '../config/mysql-config.js';
import {nanoid} from'nanoid';

export const getUser = async ()=>{
    const [result] = await pool.query("SELECT userId as id,firstName,lastName FROM user");
    return result;
}

export const createUser = async (user) => {
  const id = nanoid();
  try {
    await pool.query(
      `INSERT INTO user (userId, firstName, lastName, birthDate, email, phone, password,imageUrl,createdAt) 
                VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        id,
        user.firstName,
        user.lastName,
        user.birthDate,
        user.email,
        user.phone,
        user.password,
        user.imageUrl,
        new Date(),
      ]
    );
    const result = await getUser(id);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const deleteUser = async (id)=>{
   try{
    const [result] = await pool.query('Delete From user WHERE userId=?',[id]);
    return id;
   }catch(e){
    console.error(e);
    return null;
   }
}

export const updateUser = async (user) => {
  try {
    await pool.query(
      `update user set firstName=?, lastName=?, birthDate=?, email=?, phone=?, password=?, imageUrl=?,updatedAt=? where userId=?`,
      [
        user.firstName,
        user.lastName,
        user.birthDate,
        user.email,
        user.phone,
        user.password,
        user.imageUrl,
        new Date(),
        user.userId,
      ]
    );
    const result = await getUser(user.userId);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const sortUser = async (id)=>{
    const [result] = await pool.query( "SELECT * from user where userId=?",[id])
    return result.length ? result[0] : null;
}