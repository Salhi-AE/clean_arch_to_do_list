import AddTodo from "./src/core/usecases/AddTodo.js";
import Todorepository from "./src/core/interfaces/repositories/TodoRepository.js";
import ListTodos from "./src/core/usecases/ListTodos.js";
import ToggleTodo from "./src/core/usecases/ToggleTodo.js";
import DeleteTodo from "./src/core/usecases/DeleteTodo.js";
import EditTitleTodo from "./src/core/usecases/EditTitleTodo.js";
import DeleteAllTodos from "./src/core/usecases/DeleteAllTodos.js";
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
// async function testToggleTodo() {
//   const repo = new Todorepository();
//   const toggleTodoUseCase = new ToggleTodo(repo);

//   const toggleTest = await repo.persist({  title: "Toggle Test Todo", completed: false });

//   console.log("Test 4: Toggling the todo's completed status");

//   try{
//     const toggleTestUpdated = await toggleTodoUseCase.execute(toggleTest.id);
//     console.log("Toggled Todo:", toggleTestUpdated);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// async function testDeleteTodo() {
//   const repo = new Todorepository();
//   const deleteTodoUseCase = new DeleteTodo(repo);

//   const deletTest = await repo.persist({
//     id: null,
//     title: "Delete Test Todo",
//     completed: false,
//   });

//   console.log("Test 5: Deleting the todo");
//   try {
//     await deleteTodoUseCase.execute(deletTest.id);
//     const allTodos = await repo.getAll();
//     console.log("All Todos after deletion:", allTodos);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }
// async function testeditTitleTodo() {
//   const repo = new Todorepository();
//   const editTitleTodoUseCase = new EditTitleTodo(repo);

//   const editTitleTodoTest = await repo.persist({
//     id: null,
//     title: "Edit Title Test Todo",
//     completed: false,
//   });

//   console.log("Test 6: Editing the todo's title");
//   try {
//     const updatedTodo = await editTitleTodoUseCase.execute(
//       editTitleTodoTest.id,
//       "Updated Title"
//     );
//     console.log("Updated Todo:", updatedTodo);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// async function testDeleteAllTodosCompleted() {
//   const repo = new Todorepository();
//   const deleteAllTodosUseCase = new DeleteAllTodos(repo);

//   await repo.persist({ id: null, title: "First Todo", completed: true });
//   await repo.persist({ id: null, title: "Second Todo", completed: false });
//   await repo.persist({ id: null, title: "Third Todo", completed: true });

//   console.log("Test 7: Deleting all completed todos");
//   try {
//     await deleteAllTodosUseCase.execute();
//     const allTodos = await repo.getAll();
//     console.log("All Todos after deleting completed:", allTodos);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// testAddTodo();
// testgetAllTodos();
// testToggleTodo();
// testDeleteTodo();
// testeditTitleTodo();
// testDeleteAllTodosCompleted();
