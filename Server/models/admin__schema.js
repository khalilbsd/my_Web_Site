import mongoose  from "mongoose";

const admin__schema=mongoose.Schema({
        name:String,
        lname:String,
        desc:String,
        date_birth:Date,
        image:String,
        linkd:String,
        instagram:String,
        job:String,
        fb:String,
        email:String,
        Git:String,
})

const Admin=mongoose.model('Admin',admin__schema);
export default Admin;