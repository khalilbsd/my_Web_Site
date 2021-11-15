import contact_schema from '../models/contact_schema.js'

export const getContactEmails= async(req,res)=>{
   try {
        const contact=await contact_schema.find();
        res.status(200).json(contact)
   }catch(error){
    console.error();
    res.status(404).json({
        message: error.message
    })
   }
}

export const postContactEmails = async(req,res)=>{
    const contact =req.body;
    const newContact = new contact_schema(contact)
    try {
     await newContact.save();
        res.status(201).json(newContact)
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}
