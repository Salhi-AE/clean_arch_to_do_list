class Todo {
  constructor({ id, title, completed = false, userId }) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.userId = userId;
  }
}
export default Todo;
