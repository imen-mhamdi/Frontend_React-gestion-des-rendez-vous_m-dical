const express = require('express');
require('dotenv').config();
require('./config/connect');
const userApi=require('./routes/user')
const consultationApi=require('./routes/consultation')
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const bodyParser=require("body-parser")
const cors=require("cors")
const corsOptions =require("./config/corsOption");


dotenv.config()
const MONGODB_URI= process.env.MONGODB_URI
const PORT = process.env.PORT || 5000

const app=express()
app.use(express.json())
app.use(cors());
app.use(cors(corsOptions));
//this route MUST HAVE TO GET IMAGES
app.use('/avatarPatient',express.static('./uploads/patient'))
app.use('/avatarDocteur',express.static('./uploads/docteur'))

app.use(bodyParser.json());

app.use('/user',userApi)
app.use('/consultation',consultationApi)


mongoose.connect(MONGODB_URI).then(()=>{
    console.log('connected to the database');
    app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`);})
}).catch(err=>{console.log(err);})