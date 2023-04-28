const express = require("express");

// Router se hm routes ko create karte hai
const router = express.Router();


// import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodoById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo")
const { deleteTodo } = require("../controllers/deleteTodo")

//define Api routes 

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodos/:id", updateTodo)
router.delete("/deleteTodos/:id", deleteTodo);
module.exports = router;