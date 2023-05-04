// server create
const express = require("express");
const app = express();

//port find karne ke liye 
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// middleware json body ----->JSON body ko parse karne ke liye
app.use(express.json());


// Routes import 
const blog = require("./routes/blog")
// mount path defaulter
app.use("/api/V1", blog)


//database fetch
const connectWithdb = require("./config/database");
connectWithdb();



// server activate
app.listen(PORT, () => {
    console.log("App is running successfull")
})

// default route par server work ki hime page par ye show hoga
app.get("/", (req, res) => {
    res.send(`<h1>this is My Home page</h1>`)
}
)