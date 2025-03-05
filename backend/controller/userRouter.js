const express = require('express');

const userRouter = express.Router();

const {userModel} = require('../models/userModel');

const uploadUserImage = require('../middleware/multer');

userRouter.post("/signUp",uploadUserImage.single("image"),async(request,response) => {
    try {
        const {name, email, password} = request.body;
        if(name!=""||email!=""||password!=""){
            return response.status(400).send({message:"Please fill all the fields"});
        }
        const user =await userModel.findOne({email:email});
        if(user){
            return response.status(200).send({message:"Email already exists"});
        }
        const newUser = await userModel.insertOne({name,email,password});
        return response.status(200).send({message:"User signed up successfully"});
    } catch (error) {
       return response.status(500).send({message:"Error occurred while signing up user"});
    }    
})
userModel.postLogin("/login",async(request,response) => {
    try {
        const {email, password} = request.body;
        if(email==""||password==""){
            return response.status(400).send({message:"Please fill all the fields"});
        }
        const user = await userModel.findOne({email:email});
        if(!user){
            return response.status(400).send({message:"Email not found"});
        }
        if(user.password!=password){
            return response.status(400).send({message:"Password is incorrect"});
        }
        return response.status(200).send({message:"User logged in successfully"});
    } catch (error) {
        return response.status(500).send({message:"Error occurred while logging in user"});
    }
})




module.exports = userRouter();