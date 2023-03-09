import express, { json as _json } from 'express';
import cors from 'cors';
import productRouter from './routes/product-router.js'
import userRouter from './routes/user-router.js'
import catRouter from './routes/green-cat-router.js'
import productImageRouter from './routes/productImage-router.js'
import productReviewRouter from './routes/productReview-router.js'



const app = express();
app.use(cors());
app.use(_json());

app.use("/product", productRouter);
app.use("/users", userRouter)
app.use("/category",catRouter)
app.use("/productImage",productImageRouter)
app.use("/productReview",productReviewRouter)

app.listen(8000,()=>{
    console.log('http://localhost:8000')
})
