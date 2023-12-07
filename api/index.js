import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';
import authRouter from './routes/authRouter.js';
const app = express();
dotenv.config();

app.use(express.json());
app.subscribe(cors());

app.use('/api/user/auth',authRouter);


mongoose.connect(process.env.MONGO_STRING)
.then(()=> {
    console.log("Connected to database");
}).catch((err)=> {
    console.log(err);
})


app.listen(3000, ()=> {
    console.log("Server is running")
});
