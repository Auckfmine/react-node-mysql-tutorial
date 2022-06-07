const { Todo } = require("../model/todo");

//create todo
exports.addTodo = async function (req, res, next) {
  try {
    const { description } = req.body;
    const todo = new Todo();

    if (!description) {
      return res.json({ success: false, error: "todo cant  be empty" });
    }

    todo.set("description", description);
    await todo.save();

    return res.json({ success: true, todo: todo });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
};

//getAllTodos

exports.getAllTodos = async function (req, res, next) {
  try {
    const todos = await Todo.findAll();
    return res.json({ success: true, todos });
  } catch (error) {
    res.json({ success: true, error: error.message });
  }
};
//getTodoById
exports.getTodoById = async function (req, res, next) {
  try {
    const { todoId } = req.params;
    const todo = await Todo.findByPk(todoId);
    if (!todo) {
      return res.json({
        success: false,
        error: "no todo was found with id" + todoId,
      });
    }
    return res.json({ success: true, todo });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
};
//update-todo

exports.updateTodo = async function (req, res, next) {
  try {
    const { todoId } = req.params;
    const { description } = req.body;
    console.log(req.body);
    if (!description) {
      return res.json({ success: false, error: "body must not be empty" });
    }
    const todo = await Todo.findByPk(todoId);
    if (!todo) {
      return res.json({
        success: false,
        error: "todo with id : " + todoId + " was not found ",
      });
    }
    todo.set("description", description);
    await todo.save();
    return res.json({
      success: true,
      message: "todo with id : " + todoId + " was updated  successfully ",
    });
  } catch (error) {
    return res.json({
      success: false,
      error: error.message,
    });
  }
};

//deleteTodo
exports.deleteTodo = async function (req, res, next) {
  try {
    const { todoId } = req.params;
    await Todo.destroy({ where: { id: todoId } });
    return res.json({ success: true, message: "todo deleted successfully" });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};
