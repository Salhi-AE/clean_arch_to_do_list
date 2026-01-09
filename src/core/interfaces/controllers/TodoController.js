class TodoController {
  constructor(useCases) {
    this.useCases = useCases;
  }
  async getAllTodos(req, res) {
    try {
      const todos = await this.useCases.listTodos.execute();
      res.render("index", { todos });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
export default TodoController;
