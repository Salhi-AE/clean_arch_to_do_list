import Todo from "../entities/Todo.js";

class AddTodo {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }
  async execute(title) {
    const titleStr = String(title || "")
    if (!title || titleStr.trim() === "") {
      throw new Error("title is required");
    }

    const newTodo = new Todo(null, titleStr.trim(), false);
    return await this.todoRepository.persist(newTodo);
  }
}

export default AddTodo;
