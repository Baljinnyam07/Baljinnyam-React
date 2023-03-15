import { userSchema } from "../models/UserModel.js";
import mongoose from "mongoose";


const userModel = mongoose.model("User", userSchema);

export const getUsers = async () => {
    return await userModel.find({});
}


export const createUser = async (user) =>{
    return await userModel.create(user)
};
