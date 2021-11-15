import express from 'express'
import {getInformation_admin} from '../controllers/controller_admin.js';
 
const router=express.Router();

router.get('/',getInformation_admin)



export default router;