import AddTodo  from "./src/core/usecases/AddTodo.js";
import Todorepository from "./src/core/interfaces/repositories/TodoRepository.js";

async function testAddTodo(){
    const repo = new Todorepository();
    const addUserCase = new AddTodo (repo);

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

testAddTodo();