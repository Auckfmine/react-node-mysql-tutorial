const express = require("express");
const router = express.Router();
const {
  addTodo,
  getAllTodos,
  getTodoById,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

router.post("/add-todo", addTodo);
router.get("/all-todos", getAllTodos);
router.get("/get-todo/:todoId", getTodoById);
router.delete("/delete-todo/:todoId", deleteTodo);
router.put("/update-todo/:todoId", updateTodo);
//add a route to get all todos   GET /all-todos 


//add a route to get a todo by id   GET /get-todo/:todoId
module.exports = router;
