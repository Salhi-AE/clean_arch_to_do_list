class ToggleTodo {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(id) {
    const todo = await this.todoRepository.findById(id);

    if (!todo) {
      throw new Error("Todo not found");
    }

    todo.completed = !todo.completed;
    return  this.todoRepository.update(todo);
  }
}
export default ToggleTodo;
