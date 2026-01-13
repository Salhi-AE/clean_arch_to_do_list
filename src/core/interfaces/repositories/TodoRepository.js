import fs from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
class Todorepository {
  constructor() {
    this.filePath = path.join(__dirname, "./todos.json");
  }
  async _readFiles() {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
  async _saveFiles(todos) {
    await fs.writeFile(this.filePath, JSON.stringify(todos, null, 2));
  }
  async persist(todo) {
    const todos = await this._readFiles();
    todo.id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    todos.push(todo);
    await this._saveFiles(todos);
    return todos;
  }
  async findAll() {
    return await this._readFiles();
  }
  async findById(id) {
    const todos= await this._readFiles()
    return todos.find((todo) => todo.id === parseInt(id));
  }
  async update(updatedTodo) {
    const todos = await this._readFiles()
    const index =await todos.findIndex((todo)=> todo.id === updatedTodo.id);
        if(index !== -1) {
      todos[index] = updatedTodo;
      await this._saveFiles(todos);
      return updatedTodo;
    }
    return "Todo not found";

  }
  async delete(id) {
    const todos =await this._readFiles();
    const fileread =todos.filter((todo) => todo.id !== parseInt(id));
    await this._saveFiles(fileread) ;
    return true
  }
}
export default Todorepository;
