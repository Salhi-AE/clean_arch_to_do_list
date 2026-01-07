import AddTodo from "./src/core/usecases/AddTodo.js";
import Todorepository from "./src/core/interfaces/repositories/TodoRepository.js";
import ListTodos from "./src/core/usecases/ListTodos.js";

async function testAddTodo() {
  const repo = new Todorepository();
  const addUserCase = new AddTodo(repo);

  try {
    console.log("Test 1: Adding a todo with empty title");
    await addUserCase.execute("");

    console.log(" Test 2: Adding a valid todo");
    const todo = await addUserCase.execute("Learn Clean Architecture");
    console.log("Added Todo:", todo);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

async function testgetAllTodos() {
  const repo = new Todorepository();
  const allTodos = new ListTodos(repo);

  try {
    await repo.persist({ id: null, title: "First Todo", completed: false });
    await repo.persist({ id: null, title: "Second Todo", completed: true });

    console.log("Test 3: Getting all todos from repository");
    const listTodos = await allTodos.execute();
    console.log("All Todos:", listTodos);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
testAddTodo();
testgetAllTodos();
