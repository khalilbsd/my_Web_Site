import express from 'express'
import {getImage,postImage} from '../controllers/controller_image.js';
 
const router=express.Router();


router.get('/',getImage)
router.post('/',postImage)
 
export default router;
