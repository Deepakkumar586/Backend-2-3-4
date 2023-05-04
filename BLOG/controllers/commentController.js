//import model
const Post = require("../models/postModel")
const Comment = require("../models/commentModels");


//business logic
exports.createComment = async (req, res) => {
    try {
        //fetch data from request ki body
        const { post, user, body } = req.body;

        //create a comment object
        const comment = new Comment({ post, user, body });

        //store object to database
        const saveComment = await comment.save();

        //find the post by ID ,add the new comment to its commnents array

        const updatePost = await Post.findByIdAndUpdate(post, { $push: { comments: saveComment._id } }, { new: true })
            .populate("comments") //populate the comments array with comment documents
            .exec();

        res.json({
            post: updatePost,
        })

    }
    catch (err) {
        return res.status(500).json({
            err: "Error while creating comments",
        });

    }
}

