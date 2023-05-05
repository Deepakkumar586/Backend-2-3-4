const express = require("express");
const router = express.Router();

// import controller
const { dummyLink, likePost, unlikePost } = require("../controllers/likeController");
const { createComment } = require("../controllers/commentController");
const { createPost } = require("../controllers/postController");
const { getAllPosts } = require("../controllers/postController")





//Mapping Create through path
router.get('/dummyroute', dummyLink);
router.post('/comments/create', createComment)
router.post('/post/create', createPost)
router.get('/posts', getAllPosts)
router.post('/likes/like', likePost)
router.post('/likes/unlikes', unlikePost)





//export
module.exports = router;


