import express from 'express'
import {getContactEmails,postContactEmails} from '../controllers/controller_contact.js';
 
const router=express.Router();


router.get('/',getContactEmails)
router.post('/',postContactEmails)
 
export default router;
