const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title:{type:String,required:true,trim:true},
    description:{type:String,required:true,trim:true},
    price:{type:Number,required:true},
    images:{type:[Strings],required:true},
    createdAt:{type:Date,default:Date.now}
})

const productModel = mongoose.model("products",schema);

MediaSourceHandle.exports = productModel;