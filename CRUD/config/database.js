const mongoose = require('mongoose') // mongoose ko import kiya hai



// jo bhi env file ke ander configure/data likha hus hoga vo sbhi ak procees object ke ander aa jayenge
require("dotenv").config();

// dbConnect ---> connection established between application and database
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("DB connection success"))
        .catch((error) => {
            console.log("Issue in db connection");
            console.error(error.message);
            process.exit(1);
        }
        );
}
// module = backend me  export ho rha hai as like a fronted export
module.exports = dbConnect;
