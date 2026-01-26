import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/infrastructure/config/db.js";
import TodoRepo from "./src/core/interfaces/repositories/TodoRepository.js";
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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const todoRepo = new TodoRepo();
const useCases = {
    listTodos : new ListTodos(todoRepo),
    addTodos: new AddTodo(todoRepo),
    editTodos: new EditTitleTodo(todoRepo),
    deleteTodo: new DeleteTodo(todoRepo),
    toggleTodo: new ToggleTodo(todoRepo),

}

const todoController = new TodoController(useCases);
connectDB();
 
app.get('/', (req,res)=> todoController.getAllTodos(req,res));
app.post('/add-todo',(req,res)=> todoController.addTodo(req,res));
app.post('/edit-todo/:id',(req,res)=> todoController.editTodo(req,res));
app.get('/delete-todo/:id',(req,res)=> todoController.deleteTodo(req,res));
app.get('/toggle-todo/:id',(req,res)=> todoController.toggleTodo(req,res));
app.listen(port,()=> {
    console.log(`Server is running at http://localhost:${port}`);
})
