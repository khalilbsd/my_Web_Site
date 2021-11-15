import mongoose  from "mongoose";

const contact_schema=mongoose.Schema({
        email:String,
       message:String,
       details:String,
       fname:String,
       lname:String,
       subject:String,
})

const Contact=mongoose.model('Contact',contact_schema);
export default Contact;