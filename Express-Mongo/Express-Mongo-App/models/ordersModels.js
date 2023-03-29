import mongoose, { Schema } from "mongoose";

const ordersSchema = new mongoose.Schema({
    name:String,
    location:{
        type :{type:String,default:"Point"},
        coordinates : [Number],
    },
});

const ordersModel = new mongoose.model("Orders", ordersSchema);

ordersModel.collection.createIndex({location:"2dsphere"});

export default ordersModel;