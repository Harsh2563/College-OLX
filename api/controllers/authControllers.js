import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs'
import User from '../Model/userModel.js';
import jwt from 'jsonwebtoken';

export const signUp = async(req,res,next)=> {
    const {username,email,password} = req.body; 
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashedPassword});
    try {
        await newUser.save();
        res.status(200).json("user registered successfully");
    } catch (error) {
       next(error);
    }
}

export const signIn = async(req,res,next)=> {
    const{email,password} = req.body;
    try {
        const validUser = await User.findOne({email});

        if(!validUser) {
            res.status(400).json("User not found");
        }

        const validPassword = bcryptjs.compareSync(password,validUser.password);

        if(!validPassword) {
            res.status(400).json("Invalid password");
        }

        const token = jwt.sign({id: validUser._id},process.env.JWT_SECRET);
        const {password:pass,...rest} = validUser._doc;
        res.cookie('access_token',token,{httponly:true}).status(200).json(rest)
    } catch (error) {
        next(error);
    }
}

