import express from "express";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./src/core/interfaces/routes/authRoutes.js";
import isAuth from "./src/core/interfaces/middlewares/authMiddlewars.js";
import connectDB from "./src/infrastructure/config/db.js";
import TodoRepo from "./src/core/interfaces/repositories/TodoRepository.js";
import UserRepository from "./src/core/interfaces/repositories/UserRepository.js";
import AddTodo from "./src/core/usecases/AddTodo.js";
import EditTitleTodo from "./src/core/usecases/EditTitleTodo.js";
import DeleteTodo from "./src/core/usecases/DeleteTodo.js";
import ToggleTodo from "./src/core/usecases/ToggleTodo.js";
import ListTodos from "./src/core/usecases/ListTodos.js";

import TodoController from "./src/core/interfaces/controllers/TodoController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const todoRepo = new TodoRepo();
const userRepo = new UserRepository();
const useCases = {
  listTodos: new ListTodos(todoRepo),
  addTodos: new AddTodo(todoRepo),
  editTodos: new EditTitleTodo(todoRepo),
  deleteTodo: new DeleteTodo(todoRepo),
  toggleTodo: new ToggleTodo(todoRepo),
};

const todoController = new TodoController(useCases, userRepo);
connectDB();

app.use(
  session({
    secret: "my-super-secret-key", 
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, // يوم واحد
  }),
);

app.get("/", (req, res) => todoController.getAllTodos(req, res));
app.post("/add-todo", isAuth, (req, res) => todoController.addTodo(req, res));
app.post("/edit-todo/:id", isAuth, (req, res) =>
  todoController.editTodo(req, res),
);
app.get("/delete-todo/:id", isAuth, (req, res) =>
  todoController.deleteTodo(req, res),
);
app.get("/toggle-todo/:id", isAuth, (req, res) =>
  todoController.toggleTodo(req, res),
);
app.use(authRoutes);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
app.use((req, res, next) => {
    res.status(404).render('error', { 
        message: 'the page you are looking for was not found.', 
        status: 404 
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack); 
    res.status(err.status || 500).render('error', { 
        message: err.message || 'Internal Server Error', 
        status: err.status || 500 
    });
});