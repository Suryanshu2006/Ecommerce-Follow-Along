const express = require('express');
const cartRouter = express.Router();
const productModel = require('../model/productModel');
const cartModel = require('../model/cartModel');

cartRouter.get('/cartproduct/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).send({message:"Please provide user id"});
        }
        const product = await productModel.findOne({_id:id});
        if(!product){
            return res.status(404).send({message:"Product not found"});
        }
        const {title,description,price,images} = product;
        const newCartProduct = await cartModel.insertOne({
            title,description,price,images,userId:req.userId
        })

        return res.status(201).send({message:"Product is added to cart sucessfully"});
    } catch (error) {
        return res.status(500).send({message:"Something went wrong"});
    }
})

cartRouter.put("/:cartproductid",async(req,res)=>{
    try {
        const cartproductid = req.params;
        if(!cartproductid){
            return res.status(400).send({message:"Please Add product id"});
        }
        const {noofcartitem}=req.query;
        if(noofcartitem<1){
            return res.status(400).send({message:"Cart item should not be less than one"});
        }

        const item = await cartModel.findByIdAndUpdate({_id:cartproductid},{quantity:noofcartitem});
        if(!item){
            return res.status(404).send({message:"Item not found of respective id"});
        }
        return res.status(200).send({message:"Item count updated sucessfully"})
    } catch (error) {
        return res.status(500).send({message:"Something went wrong"});
    }
})

cartRouter.delete("/delete/:cartproductid",async(req,res)=>{
    try {
        const cartproductid = req.params.cartproductid;
        if(!cartproductid){
            return res.status(400).send({message:"Please Add product id"});
        }
        const item = await cartModel.findByIdAndDelete({_id:cartproductid});
        if(!item){
            return res.status(404).send({message:"Item not found of respective id"});
        }
        return res.status(200).send({message:"Item deleted sucessfully"})
    } catch (error) {
        return res.status(500).send({message:"Something went wrong"});
    }
})
cartRouter.get("/",async(req,res)=>{
    try {
        const cartProducts = await cartModel.find({userId:req.userId});
        if(cartProducts.length===0){
            return res.status(404).send({message:"No products in cart"});
        }
        return res.status(200).send(cartProducts);
    } catch (error) {
        return res.status(500).send({message:"Something went wrong"});
    }
})

module.exports = cartRouter;