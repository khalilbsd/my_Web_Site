import mongoose  from "mongoose";

const account__schema=mongoose.Schema({
        email:String,
       password:String,
       profile:String,
})

const Account=mongoose.model('Account',account__schema);
export default Account;