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

  insertTask = async (email: string, tasksToDo: Array<string>)  => {
    await this.mySqlDb.insertTasksByEmail(email, tasksToDo);
    return tasksToDo;
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

  userLogInAndReturnExistsTasks = async (email: string, name: string, imageUrl: string) => {
    const tasksToDo: Array<string> = await this.mySqlDb.userLogInAndReturnExistsTasks(email, name, imageUrl);
    return tasksToDo;
  }
}




export default ToDoList;