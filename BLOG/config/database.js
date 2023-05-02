const mongoose = require("mongoose");

require('dotenv').config();

const connectWithdb = () => {
    // ye ak promise return karta hai
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true, //some FLags 
        useUnifiedTopology: true,
    })
        .then(console.log("Db connected successfully"))
        .catch((err) => {
            console.log("Db connection Issue");
            process.exit(1); //exit with error
        })

}
module.exports = connectWithdb;