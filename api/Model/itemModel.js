import mongoose from "mongoose";

const itemModel = mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    title:{
        type:String,
        required:true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type:Number,
        required:true,
    },
    photo:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
    }
})

const Item = new mongoose.model("Item",itemModel);
export default Item;