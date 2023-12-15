import User from '../Model/userModel.js'
import { errorHandler } from '../middleware/errorHandler.js';
import bcryptjs from 'bcryptjs'


export const updateUser = async(req,res,next)=> {
    if(req.user.id!==req.params.id) {
        next(errorHandler(401,"You can only update your own account"));
    }
    try {
        if(req.body.password){
            req.body.password= bcryptjs.hashSync(req.body.password,10)
        }
        const updatedUser = await User.findByIdAndUpdate(req.user.id,{
            $set : {
              username: req.body.username,
              email: req.body.email,
              password: req.body.password,
              avatar: req.body.avatar,
            }
        },{new:true})
        const {password,...rest} = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        nect(error);
    }
}

export const deleteUser = async(req,res,next)=> {;
    if(req.user.id !==req.user.params) {
        next(errorHandler(401,"You can delete only your own account"));
    }
    try {
        await User.findByIdAndDelete(req.user.id);
        res.clearCookie('access_token');
        res.status(200).json({message:"user deleted successfully"});
    } catch (error) {
        next(error);
    }

}