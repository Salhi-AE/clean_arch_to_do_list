import TodoModel from "../../../infrastructure/models/TodoModel.js";

class Todorepository {
  async findAll(userId) {
    const todos = await TodoModel.find({ userId }).lean();
    const validTodos = todos.filter((t) => t._id);
    return validTodos.map((t) => ({
      ...t,
      id: t._id.toString(),
      userId: t.userId ? t.userId.toString() : null,
    }));
  }
  async add(todo) {
    if (!todo || !todo.title) {
      throw new Error("Todo title is required");
    }
    const newTodo = new TodoModel({ title: todo.title, userId: todo.userId });
    const savedTodo = await newTodo.save();
    return { ...savedTodo._doc, id: savedTodo._id.toString() };
  }
  async findById(id) {
    try {
      const todo = await TodoModel.findById(id).lean();
      if (!todo) return "Todo not found";
      return { ...todo, id: todo._id.toString() };
    } catch (error) {
next(error);    }
  }
  async update(updatedTodo) {
    if (!updatedTodo || !updatedTodo.id) return null;
    const todo = await TodoModel.findById(updatedTodo.id);
    if (todo) {
      todo.title = updatedTodo.title;
      return await todo.save();
    }
    return null;
  }
  async delete(id) {
    return await TodoModel.findByIdAndDelete(id);
  }
  async toggle(id) {
    if (!id) return null;
    const todo = await TodoModel.findById(id);
    if (todo) {
      todo.completed = !todo.completed;
      return await todo.save();
    }
    return null;
  }
}

export default Todorepository;
