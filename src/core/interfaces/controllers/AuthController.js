class AuthController {
  constructor(authService) {
    this.authService = authService;
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await this.authService.loginUser.execute(email, password);

      if (result && result.success) {
        req.session.userId = result.user.id;
        req.session.user = {
          id: result.user.id,
          name: result.user.username || result.user.name,
        };
        return req.session.save(() => {
          res.redirect("/");
        });
      } else {
        res.render("login", {
          path: "/login",
          error: "Invalid email or password",
        });
      }
    } catch (error) {
      next(error);
      res.render("login", { path: "/login", error: error.message });
    }
  }
  async register(req, res) {
    try {
      const { name: username, email, password } = req.body;
      const result = await this.authService.registerUser.execute({
        username,
        email,
        password,
      });
      if (result) {
        req.session.user = {
          id: result.id,
          name: result.username,
        };
        res.render("index", { user: req.session.user, todos: [] });
      } else {
        res.render("register", { error: "Failed to register user" });
      }
    } catch (error) {
      next(error);

      res.render("register", { error: error.message });
    }
  }
  async logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        return res.render("index", { error: "Failed to logout" });
      }
      res.redirect("/login");
    });
  }
}
export default AuthController;
