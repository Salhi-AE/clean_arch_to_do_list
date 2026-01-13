class ListTodos {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }
  async execute() {
    return await this.todoRepository.findAll();
  }
}

export default ListTodos;
