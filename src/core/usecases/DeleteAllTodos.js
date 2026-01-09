class DeleteAllTodos {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }
  async execute() {
    const allTodos = await this.todoRepository.deleteCompleted();
    return allTodos;
  }
}
export default DeleteAllTodos;
