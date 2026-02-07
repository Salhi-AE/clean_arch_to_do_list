class ListTodos {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }
  async execute(userId) {
    return await this.todoRepository.findAll(userId);
  }
}

export default ListTodos;
