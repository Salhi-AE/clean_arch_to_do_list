class DeleteTodo {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(userId, id) {
    if (!id) {
      
    
      throw new Error("Todo ID is required");
    }
    return this.todoRepository.delete(id);
  }
}
export default DeleteTodo;
