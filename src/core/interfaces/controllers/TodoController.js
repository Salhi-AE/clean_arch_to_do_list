class TodoController {
  constructor(useCases) {
    this.useCases = useCases;
  }
  async getAllTodos() {
    try {
      const todos = await this.useCases.ListTodos.execute();
      res.render("index", { todos });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  
}
