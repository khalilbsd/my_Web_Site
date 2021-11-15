import mongoose  from "mongoose";

const image__schema=mongoose.Schema({
    title:String,
    place:String,
    type:String,
    photography_type:String,
    message:String,
    tags:[String],
    src:String,
    createdAt:{
        type:Date,
        default:new Date()
    }
})

const Image=mongoose.model('Image',image__schema);
export default Image;