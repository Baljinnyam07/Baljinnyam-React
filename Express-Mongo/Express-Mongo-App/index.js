import express from "express";
import mongoose from "mongoose";
import userRouter from '../Express-Mongo-App/routes/users-router.js'
import multer from "multer";
import { nanoid } from "nanoid";
import cloudinary from "cloudinary"

cloudinary.config({
  cloud_name:"drweibbjm",
  api_key:"723661743431336",
  api_secret:"Vc5jsMAC38JTs5wVmZkzDucYgec",
})

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null, "/tmp");
  },
  filename:(req,file,cb)=>{
    const filename = nanoid();
    const splittedPath = file.originalname.split(".");
    const fileExtention = splittedPath[splittedPath.length - 1]
    cb(null,`${filename}.${fileExtention}}`);
  },
});

const upload = multer({ 
  storage,
  limits:{
    fileSize:10 * 1024 * 1024,
  },
  fileFilter:(req,file, cb)=>{
    if(file.mimetype.includes('image') || file.mimetype.includes('video')){
      cb(null,true);
    }else {
      cb(null, false)
    }
  }
});

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


app.post('/files',upload.single('image'), async (req,res)=>{
  const uploadedFile = await cloudinary.v2.uploader.upload(req.file.path);
  res.json(uploadedFile);
});

app.use("/uploads", express.static("uploads"));



app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});