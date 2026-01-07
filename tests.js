import AddTodo from "./src/core/usecases/AddTodo.js";
import Todorepository from "./src/core/interfaces/repositories/TodoRepository.js";
import ListTodos from "./src/core/usecases/ListTodos.js";
import ToggleTodo from"./src/core/usecases/ToggleTodo.js";
// async function testAddTodo() {
//   const repo = new Todorepository();
//   const addUserCase = new AddTodo(repo);

//   try {
//     console.log("Test 1: Adding a todo with empty title");
//     await addUserCase.execute("");

//     console.log(" Test 2: Adding a valid todo");
//     const todo = await addUserCase.execute("Learn Clean Architecture");
//     console.log("Added Todo:", todo);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// async function testgetAllTodos() {
//   const repo = new Todorepository();
//   const allTodos = new ListTodos(repo);

//   try {
//     await repo.persist({ id: null, title: "First Todo", completed: false });
//     await repo.persist({ id: null, title: "Second Todo", completed: true });

//     console.log("Test 3: Getting all todos from repository");
//     const listTodos = await allTodos.execute();
//     console.log("All Todos:", listTodos);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }
async function testToggleTodo() {
  const repo = new Todorepository();
  const toggleTodoUseCase = new ToggleTodo(repo);

  const toggleTest = await repo.persist({  title: "Toggle Test Todo", completed: false });
  
  console.log("Test 4: Toggling the todo's completed status");

  try{
    const toggleTestUpdated = await toggleTodoUseCase.execute(toggleTest.id);
    console.log("Toggled Todo:", toggleTestUpdated);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
// testAddTodo();
// testgetAllTodos();
testToggleTodo();
