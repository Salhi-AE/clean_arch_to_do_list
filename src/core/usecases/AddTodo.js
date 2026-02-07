import Todo from "../entities/Todo.js";

class AddTodo {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }
  async execute(userId, title) {
    const titleStr = String(title || "")
    if (!title || titleStr.trim() === "") {
      throw new Error("title is required");
    }

    const newTodo = new Todo({ id: null, title: titleStr.trim(), completed: false, userId });
    return await this.todoRepository.add(newTodo);
  }
}

export default AddTodo;
