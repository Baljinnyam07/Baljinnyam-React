import express from "express";
import mongoose from "mongoose";
import userRouter from '../Express-Mongo-App/routes/users-router.js'

const PORT = 8081;
const app = express();
app.use(express.json());
app.use("/api/users", userRouter);


const MONGO_CONNECTION_STRING ="mongodb+srv://Bataa123:PnZ0msYmNoXOgtTS@cluster0.ngotby2.mongodb.net/green";

mongoose.connect(MONGO_CONNECTION_STRING).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log("Could not connect to MongoDB", err)
});




app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});