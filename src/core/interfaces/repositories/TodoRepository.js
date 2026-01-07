class Todorepository {
  constructor() {
    this.todos = [];
    this.currentId = 1;
  }
  async persist(todo) {
    todo.id = this.currentId++;
    this.todos.push(todo);
    return todo;
  }
  async getAll() {
    return this.todos;
  }
  async findById(id) {
    return this.todos.find((todo) => todo.id === id);
  }
  // understand tomorrow إن شاء الله
  async update(updatedTodo) {
    const index = this.todos.findIndex((t) => t.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
      return this.todos[index];
    }
    return null;
  }
}
export default Todorepository;
