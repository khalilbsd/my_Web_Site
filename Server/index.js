import express from 'express';
import bodyParser from 'body-parser';
import  mongoose  from 'mongoose';
import cors from 'cors';
import admin__Route from './routes/route_Admin.js'
import route_image from './routes/route_images.js'
import route_Contact from './routes/route_Contact.js'
import  {Database} from './private/database.js'
const app=express();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/api/admin',admin__Route)
app.use('/api/images',route_image)
app.use('/api/contacts',route_Contact)

const CONX_URL=Database
const PORT=process.env.PORT || 5000

mongoose.connect(CONX_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`server running on post : ${PORT}`)))
.catch((error)=>console.log(error.message));
//mongoose.set('useFindAndModify', false);