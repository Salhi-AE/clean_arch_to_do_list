import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import TodoRepo from "./src/core/interfaces/repositories/TodoRepository.js";

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
}

const todoController = new TodoController(useCases);

app.get('/', (req,res)=> todoController.getAllTodos(req,res));

app.listen(port,()=> {
    console.log(`Server is running at http://localhost:${port}`);
})
