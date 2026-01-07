import Todo from "../entities/Todo.js";

class AddTodo {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }
  async execute(title) {
    if (!title || title.trim() === "") {
      throw new Error("title is required");
    }

    const newTodo = new Todo(null, title.trim(), false);
    return await this.todoRepository.persist(newTodo);
  }
}

export default AddTodo;
