import express, { json as _json } from 'express';
import cors from 'cors';
import catergoryRouter from './routes/category-router.js'
import productRouter from './routes/product-router.js'
import userRouter from './routes/user-router.js'



const app = express();
app.use(cors());
app.use(_json());

app.use("/categories", catergoryRouter);
app.use("/product", productRouter);
app.use("/users", userRouter)

app.listen(8000,()=>{
    console.log('http://localhost:8000')
})
