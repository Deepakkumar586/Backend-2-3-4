// import model
const Todo = require("../models/Todo");

//  controller me logic likhna ......
// define router Handler

exports.deleteTodo = async (req, res) => {
    try {

        // second way id fetch  ---->destructuring karke
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: 'Todo Deleted',
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