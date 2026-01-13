class TodoController {
  constructor(usecases) {
    this.usecases = usecases;
  }
  async getAllTodos(req, res) {
    try {
      const todos = await this.usecases.listTodos.execute();
      res.render("index", { todos });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async addTodo(req, res) {
    try {
      const title = req.body.title;
      await this.usecases.addTodos.execute(title);
      res.redirect("/");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async toggleTodo(req, res) {
    try {
      const { id } = req.params;
      await this.usecases.toggleTodo.execute(id);
      res.redirect("/");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async editTodo(req, res) {
    try {
      const { id } = req.params;
      const { title } = req.body;
      await this.usecases.editTodos.execute(id, title);
      res.redirect("/");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async deleteTodo(req, res) {
    try {
      const { id } = req.params;
      await this.usecases.deleteTodo.execute(id);
      res.redirect("/");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
export default TodoController;
