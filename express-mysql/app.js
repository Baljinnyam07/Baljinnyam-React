import express, { json as _json } from 'express';
import cors from 'cors';
import catergoryRouter from './routes/category-router.js'



const app = express();
app.use(cors());
app.use(_json());

app.use("/categories", catergoryRouter);

app.listen(8000,()=>{
    console.log('http://localhost:8000')
})
