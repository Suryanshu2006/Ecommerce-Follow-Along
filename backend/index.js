const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 8080;
const connect = require('./mongoDB');
const userRouter = require('./controller/userRouter');
const productRouter = require('./controller/productRouter');
const jwt = require('jsonwebtoken');
const userModel = require('./model/userModel');

app.get("/",(request, response) => {
    try {
        response.status(200).send({msg:"This is e-commerce code along backend"});
    } catch (error) {
        response.status(500).send({message:"error occured"});
    }    
})
app.use("/product",productRouter)
app.use("/user",userRouter)

app.listen(8000,async() => {
    try {
        await connect();
        console.log("server connected");
    } catch (error) {
        console.log("server not connected",error);
    }
})

app.use("/user",userRouter);

app.use("/product",async(req,res,next)=>{
    try {
        const auth = req.headers.authorisation;
        if(!auth){
            return res.status(401).send({message:"Please Login First"});
        }
        const decoded = jwt.verify(auth, process.env.JWT_PASSWORD);
        const user = await userModel.findOne({_id:decoded.id});
        if(!user){
            return res.status(401).send({message:"Please register first"});
        }
        console.log(decoded);
        next();
    } catch (error) {
        return res.status(500).send({message:"Something went wrong"});
    }
},productRouter);