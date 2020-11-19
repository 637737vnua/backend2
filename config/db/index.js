const mongoose = require('mongoose');


async function connect(){

    try{
        await mongoose.connect('mongodb://localhost:27017/backend_web_0262', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         });
        console.log("Connect successfully!!!");
    }catch (error) {
        console.log("Connect failure!!!");
    }
} 
module.exports = { connect };
