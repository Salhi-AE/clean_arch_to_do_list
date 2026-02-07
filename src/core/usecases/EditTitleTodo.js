class EditTitleTodo {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(userId,id, newTitle) {
    if (!id) {
      throw new Error("Todo ID is required");
    }

    const editTitle = String(newTitle || "");
    if (!newTitle || editTitle.trim() === "") {
        throw new Error("Title cannot be empty");
    }

    const todo = await this.todoRepository.findById(id);

    if (!todo) {
      throw new Error("Todo not found");
    }

    todo.title = newTitle;
    return this.todoRepository.update(todo);
  }
}
export default EditTitleTodo;
