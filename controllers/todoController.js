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
//updateTodo description by id
exports.updateTodoDescription = async function (req, res, next) {
  try {
    const { todoId } = req.params;
    const { description } = req.body;
    if (!description) {
      return res.json({ success: false, error: "body must not be empty" });
    } else {    
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
    }
  } catch (error) {
    return res.json({
      success: false,
      error: error.message,
    });
  }
}

//calculate days between dates

exports.calculateDaysBetweenDates = async function (req, res, next) {
  try {
    const { startDate, endDate } = req.body;


    if (!startDate || !endDate) {
      return res.json({ success: false, error: "body must not be empty" });
    } else {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return res.json({ success: true, days: diffDays });
    }
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
}
//delete todo by id



exports.updateTodoStatus = async function (req, res, next) {
  try {
    const { todoId } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.json({ success: false, error: "body must not be empty" });
    }
    const todo = await Todo.findByPk(todoId);
    if (!todo) {
      return res.json({
        success: false,
        error: "todo with id : " + todoId + " was not found ",
      });
    }
    todo.set("status", status);
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
}

//delete all todos  DELETE /delete-all-todos
exports.deleteAllTodos = async function (req, res, next) {
  try {
    const todos = await Todo.findAll();
    if (!todos) {
      return res.json({ success: false, error: "no todos found" });
    }
    await Todo.destroy({ where: {} });
    return res.json({ success: true, message: "all todos deleted" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
}

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
