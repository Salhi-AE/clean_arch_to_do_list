import fs from "fs/promises";
import path from "path";

class Todorepository {
  constructor() {
    this.filePath = path.join(__dirname, "./todos.json");
  }
  async _readFile() {
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
}
export default Todorepository;
