const express = require('express');
const app = express();
app.use(express.json());
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
const allProductRouter = require('./controller/allProducts');
const path = require('path');
const cartRouter = require('./controller/cartProducts');

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

app.use("/product",async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        console.log(token)
        if (!token) {
            return res.status(401).json({ message: "Please login" });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
        const user = await userModel.findById(decoded.id);
        
        if (!user && user.id) {
            return res.status(404).json({ message: "Please signup" });
        }
        console.log(user.id)
        req.userId = user.id; 
        next();
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Invalid Token", error });
    }
},productRouter);

app.use("/allproducts",allProductRouter);

app.use("/uploads",express.static(path.join(__dirname,"uploads")));

app.use("/cart",cartRouter);
app.use("/cart",async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ message: "Please login" });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
        const user = await userModel.findById(decoded.id);
        
        if (!user && user.id) {
            return res.status(404).json({ message: "Please signup" });
        }
        req.userId = user.id; 
        next();
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Invalid Token", error });
    }
});