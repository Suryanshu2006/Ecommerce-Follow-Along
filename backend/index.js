const express = require('express');
const app = express();

app.get("/",(request, response) => {
    try {
        response.status(200).send({msg:"This is e-commerce code along backend"});
    } catch (error) {
        response.status(500).send({message:"error occured"});
    }    
})
app.listen(8080,()=>{
    try {
        console.log("Connected to server sucessfully");
    } catch (error) {
        console.log(error);
    }
})