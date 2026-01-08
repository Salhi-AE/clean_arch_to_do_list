class DeleteTodo {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(id) {
    return this.todoRepository.delete(id);
  }
}
export default DeleteTodo;
