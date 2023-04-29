

// server instatiate/create
// rquire use express ko inport karta hai
const express = require("express")
const app = express()

//env file jo bhi config pda hua hai vo process object ke ander load ho jayegi agar port no.milgya to theek 
require("dotenv").config();
const PORT = process.env.PORT;

// midleware to parse json body
app.use(express.json());

// import routes for TODO api
const todoRoutes = require("./routes/todos")
// mount the todo ASPI routes
app.use("/api/v1", todoRoutes);



// start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

// connect databse
const dbConnect = require("./config/database");
dbConnect();


//default route
app.get("/", (req, res) => {
    res.send(`<h1>This is Home Page Mr.Deepak</h1>`)
})

