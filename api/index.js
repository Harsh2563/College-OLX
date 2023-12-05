import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_STRING)
.then(console.log("Database is connected"));
app.listen(3000, console.log("Server is running"));