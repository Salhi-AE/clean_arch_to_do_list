class ToggleTodo {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(userId, id) {
    try {
    if (!id) {
            throw new Error("ID is required");
    }

    const todo = await this.todoRepository.findById(id);

    if (!todo) {
      throw new Error("Todo not found");
    }

    return this.todoRepository.toggle(id);
  
}catch (error) {
next(error);    throw new Error("Failed to toggle todo");
  }
  }
}
export default ToggleTodo;
