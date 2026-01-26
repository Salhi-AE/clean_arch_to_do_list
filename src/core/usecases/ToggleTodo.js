class ToggleTodo {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(id) {
    const todo = await this.todoRepository.findById(id);

    if (!todo) {
      throw new Error("Todo not found");
    }

    return  this.todoRepository.toggle(todo);
  }
}
export default ToggleTodo;
