import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs'
import User from '../Model/userModel.js';

export const signUp = async(req,res,next)=> {
    const {username,email,password,phone,address} = req.body; 
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashedPassword,phone,address});
    try {
        await newUser.save();
        res.status(200).json("user registered successfully");
    } catch (error) {
       next(error);
    }
}