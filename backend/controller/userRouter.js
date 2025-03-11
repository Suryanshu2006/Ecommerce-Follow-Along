const express = require('express');

const userRouter = express.Router();

const {userModel} = require('../models/userModel');

const uploadUserImage = require('../middlewares/multer');

const bcrypt = require('bcryptjs');

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
        
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await userModel.insertOne({name,email,password:hash});


        return response.status(200).send({message:"User signed up successfully"});
    } catch (error) {
       return response.status(500).send({message:"Error occurred while signing up user"});
    }    
})
userRouter.post("/login",async(request,response) => {
    try {
        const {email, password} = request.body;
        if(email==""||password==""){
            return response.status(400).send({message:"Please fill all the fields"});
        }

        const user = await userModel.findOne({email});
        const matchedPass = bcrypt.compareSync(password, hash);
        if(user && matchedPass){
            return response.status(200).send({message:"User logged in successfully"});
        }
        return response.status(401).send({message:"Entered details are wrong"});
    } catch (error) {
        return response.status(500).send({message:"Error occurred while logging in user"});
    }
})




module.exports = userRouter;