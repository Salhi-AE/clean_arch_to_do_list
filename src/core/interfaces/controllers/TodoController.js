class TodoController {
  constructor(usecases, userRepository) {
    this.usecases = usecases;
    this.userRepository = userRepository;
  }
  async getAllTodos(req, res) {
    try {
      const userId = req.session.userId;
      if (!userId) {
        res.redirect("/login");
        return;
      }
      const todos = await this.usecases.listTodos.execute(userId);
      const user = req.session.user || { name: "User" };
      res.render("index", { todos: todos || [], user });
    } catch (error) {
next(error);
      res.status(500).send(error.message);
    }
  }
  async addTodo(req, res) {
    const userId = req.session.user ? req.session.user.id : null;
    const title = req.body.title;
    if (!title || title.trim() === "") {
      res.status(400).send("Title is required");
      return;
    }
    try {
      await this.usecases.addTodos.execute(userId, title);
      res.redirect("/");
    } catch (error) {
next(error);    
  res.status(500).send(error.message);
    }
  }

  async toggleTodo(req, res) {
    const { id } = req.params;
    const userId = req.session.userId;
    if (!id || id === "undefined" || id === "null" || id.trim() === "") {
      res.status(400).send("Invalid Todo ID");
      return;
    }
    try {
      await this.usecases.toggleTodo.execute(userId, id);
      res.redirect("/");
    } catch (error) {
next(error);      res.status(500).send(error.message);
    }
  }
  async editTodo(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const userId = req.session.userId;
    if (!id || id === "undefined" || id === "null" || id.trim() === "") {
      res.status(400).send("Invalid Todo ID");
      return;
    }
    if (!title || title.trim() === "") {
      res.status(400).send("Title is required");
      return;
    }
    try {
      await this.usecases.editTodos.execute(userId, id, title);
      res.redirect("/");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async deleteTodo(req, res) {
    const { id } = req.params;
    const userId = req.session.userId;

    if (!id || id === "undefined" || id === "null" || id.trim() === "") {
      res.status(400).send("Invalid Todo ID");
      return;
    }

    try {
      await this.usecases.deleteTodo.execute(userId, id);
      res.redirect("/");
    } catch (error) {
next(error);      res.status(500).send(error.message);
    }
  }
}
export default TodoController;
