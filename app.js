const express = require("express");
const path = require("path");

import TodoRepo from "./repository/TodoRepository.js";

import ListTodos from "./usecases/ListTodos.js";

import TodoController from "./controllers/TodoController.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__direname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const TodoRepo =new TodoRepo();
const useCases = {
    listTodos : new ListTodos(TodoRepo),
}

const todoController = new TodoController(useCases);

app.get('/', (req,res)=> todoController.getAllTodos(req,res));

app.listen(port,()=> {
    console.log(`Server is running at http://localhost:${port}`);
})