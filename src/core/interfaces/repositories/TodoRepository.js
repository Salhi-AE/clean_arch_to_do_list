class Todorepository {
    constructor() {
        this.todos = [];
        this.currentId =1;
    }
    async persist(todo){
        todo.id = this.currentId++;
        this.todos.push(todo);
        return todo;
    }
}
export default Todorepository;