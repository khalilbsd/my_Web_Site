import image__schema from '../models/image_schema.js'

export const getImage= async(req,res)=>{
   try {
        const images=await image__schema.find();
        res.status(200).json(images)
   }catch(error){
    console.error();
    res.status(404).json({
        message: error.message
    })
   }
}

export const postImage = async(req,res)=>{
    const image =req.body;
    const newImage = new image__schema(image)
    try {
     await newImage.save();
        res.status(201).json(newImage)
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}
