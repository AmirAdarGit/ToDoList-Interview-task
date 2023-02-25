import Database from './db'
class ToDoList {

  private static todolist: ToDoList;
  private mySqlDb: Database | undefined = Database.getInstance()

  constructor() {
  }

  static getInstance(): ToDoList {
    if (!ToDoList.todolist) {
      this.todolist = new ToDoList();
    }

    return ToDoList.todolist;
  }

  insertTask = async (email: string, tasksToDo: Array<string>)  => {
    if (this.mySqlDb) await this.mySqlDb.insertTasksByEmail(email, tasksToDo);
    return tasksToDo;
  }


  userLogInAndReturnExistsTasks = async (email: string, name: string, imageUrl: string) => {
    if (this.mySqlDb){
      const tasksToDo: Array<string> = await this.mySqlDb.userLogInAndReturnExistsTasks(email, name, imageUrl);
      return tasksToDo;
    }

  }
}




export default ToDoList;