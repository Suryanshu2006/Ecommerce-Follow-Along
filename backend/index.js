const express = require('express');
const app = express();
const connect = require('./mongoDB');
const userRouter = require('./controller/userRouter');

app.get("/",(request, response) => {
    try {
        response.status(200).send({msg:"This is e-commerce code along backend"});
    } catch (error) {
        response.status(500).send({message:"error occured"});
    }    
})

app.use("/user",userRouter)
app.listen(8000,async() => {
    try {
        await connect();
        console.log("server connected");
    } catch (error) {
        console.log("server not connected",error);
    }
})