//import mongoose
const mongoose = require('mongoose');



// routte handler
const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // this is refrence to Post Model  
    },
    user: {
        type: String,
        required: true,
    }
})

// export
module.exports = mongoose.model('Like', likeSchema);