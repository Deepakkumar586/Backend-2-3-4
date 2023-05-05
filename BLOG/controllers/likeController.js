//import model
const Post = require("../models/postModel");
const Like = require("../models/likeModel");



// like on post 
exports.likePost = async (req, res) => {
    try {
        // fetch data from request body
        const { post, user } = req.body;


        //create a like object
        const like = new Like({ post, user });


        //store to databse
        const saveLike = await like.save();

        //find the post by ID ,add the new Like to its Like array
        const updatePost = await Post.findByIdAndUpdate(post, { $push: { likes: saveLike._id } }, { new: true })
            .populate("likes") //actual id and actual comments pade huye hai
        res.json({
            post: updatePost,
        })
    }
    catch (err) {
        return res.status(500).json({
            err: "Error while creating likes",
        });
    }
}


//unLike post
exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;

        //find and delete like collection
        const deletedLike = await Like.findOneAndDelete({ post: post, _id: like })


        //update post collection
        const updatedPost = await Post.findByIdAndUpdate(post, { $pull: { likes: deletedLike._id } }, { new: true });


        res.json({
            post: updatedPost,
        })


    }
    catch (error) {
        return res.status(500).json({
            err: "Error while creating unlikes",
        });

    }
}

exports.dummyLink = async (req, res) => {
    res.send("This is Dummy Page")
}
