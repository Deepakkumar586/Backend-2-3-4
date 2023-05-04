//import model
const Post = require("../models/postModel");



// logic
exports.createPost = async (req, res) => {
    try {
        // fetch data fro request ki body
        const { title, body } = req.body;
        //create a post object
        const post = new Post({ title, body });

        //store object to database
        const savePost = await post.save();


        res.json({
            post: savePost,
        })

    }
    catch (error) {
        return res.status(400).json({
            error: 'Error while create Post',
        })
    }

}