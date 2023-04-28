// import model
const Todo = require("../models/Todo");


// define router Handler

exports.getTodo = async (req, res) => {
    try {

        // fetch all todos item from data base
        // Todo.find means sare ke sare data ko fetch kar rhe hai
        const todos = await Todo.find({});


        // response update 
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Todo data is fetched"

        })


    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'server Error',

        })


    }
}

// get single todo using Id

exports.getTodoById = async (req, res) => {
    try {
        // extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id })

        //data for given id not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No data found with Given id",
            })
        }
        // data for given is found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`,
        })


    }
    catch (err) {
        console.error(err)
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'server Error',

        })


    }
}