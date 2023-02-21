import Database from './db'
class ToDoList {

  private static todolist: ToDoList;
  private mySqlDb = Database.getInstance()

  constructor() {
    console.log("in constractor")
  }

  static getInstance(): ToDoList {
    if (!ToDoList.todolist) {
      this.todolist = new ToDoList();
    }

    return ToDoList.todolist;
  }

  insertTask(): void {
    console.log("insert new task logic..")
  }

  getAllTasks(): Array<string> {
    this.mySqlDb.getAllTasksFromDb()
    return [];
  }

  deleteTask(name: string): void {
    console.log("delete one the tasks logic..")
  }
  deleteAllTask(name: string): void {
    console.log("delete all the tasks logic..")
  }
}




export default ToDoList;