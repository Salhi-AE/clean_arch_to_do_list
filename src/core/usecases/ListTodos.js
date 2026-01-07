class ListTodos {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }
  async execute() {
    return await this.todoRepository.getAll();
  }
}

export default ListTodos;
