const mongoose = require('mongoose');

async function connect(){
    try {
       await mongoose.connect(`mongodb+srv://singhsuryanshukumar5:Sury%231906@cluster0.szxct.mongodb.net/`)
    } catch (error){
        console.log("Mongo db error",error);
    }
}

module.exports = connect;