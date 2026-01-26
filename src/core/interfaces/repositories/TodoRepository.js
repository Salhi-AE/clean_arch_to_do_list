import TodoModel from "../../../infrastructure/models/TodoModel.js";

class Todorepository {
  async findAll() {
    const todos = await TodoModel.find().lean();
    return todos.map((t) => ({ ...t, id: t._id.toString() }));
  }
  async add(todo) {
    const newTodo = new TodoModel({ title: todo.title });
    const savedTodo = await newTodo.save();
    return { ...savedTodo._doc, id: savedTodo._id.toString() };
  }
  async findById(id) {
    const todo = await TodoModel.findById(id).lean();
    if (!todo) return "Todo not found";
    return { ...todo, id: todo._id.toString() };
  }
  async update(updatedTodo) {
    const todo = await TodoModel.findById(updatedTodo.id);
    if (todo) {
      todo.title = updatedTodo.title;
      return await todo.save();
    }
  }
  async delete(id) {
    return await TodoModel.findByIdAndDelete(id);
  }
  async toggle(id){
    const todo = await TodoModel.findById(id);
    if (todo) {
      todo.completed = !todo.completed;
      return await todo.save();
    }
  }
}

export default Todorepository;
