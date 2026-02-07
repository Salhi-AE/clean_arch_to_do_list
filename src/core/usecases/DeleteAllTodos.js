class DeleteAllTodos {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }
  async execute(userId) {
    const allTodos = await this.todoRepository.deleteCompleted(userId);
    return allTodos;
  }
}
export default DeleteAllTodos;
