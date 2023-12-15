import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import userRouter from './routes/userRoute.js'
import authRouter from './routes/authRouter.js';
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/user/auth',authRouter);
app.use('/api/user',userRouter)


mongoose.connect(process.env.MONGO_STRING)
.then(()=> {
    console.log("Connected to database");
}).catch((err)=> {
    console.log(err);
})


app.listen(3000, ()=> {
    console.log("Server is running")
});
