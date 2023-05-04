//import mongoose
const mongoose = require('mongoose');




//rouute Handler
const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // this is refrence to Post Model  
    },
    user: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
})





// export
module.exports = mongoose.model('Comment', commentSchema)

