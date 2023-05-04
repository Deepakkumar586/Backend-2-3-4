const express = require("express");
const router = express.Router();

// import controller
const { dummyLink } = require("../controllers/likeController");
const { createComment } = require("../controllers/commentController");
const { createPost } = require("../controllers/postController");





//Mapping Create through path
router.get('/dummyroute', dummyLink);
router.post('/comments/create', createComment)
router.post('/post/create', createPost)





//export
module.exports = router;


