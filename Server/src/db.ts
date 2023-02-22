import mysql from 'mysql2/promise';

class Database {

  private static dbInstance: Database;
  private static dbPool: mysql.Pool;

  private constructor() {
    this.connectToDb();
  }

  private connectToDb() {
    Database.dbPool = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "amirA123",
    });
  }

  public static getInstance(): Database {
    if (!Database.dbInstance) {
      this.dbInstance = new Database();
    }
    return this.dbInstance;
  }

  public getAllTasksFromDb() {
    Database.dbPool.query("select * from todolist.users", (res: any, err: Error) => {
      if (err) {
        console.log(err)
      } else {
        console.log(res)
      }
    })
  }

  userLogInAndReturnExistsTasks = async (email: string, name: string, imageUrl: string) => {
    const insertSqlQuery = `INSERT IGNORE INTO todolist.users (email, name, imageUrl) VALUES ('${ email }', '${ name }', '${ imageUrl }')`;
    try {
      await Database.dbPool.query(insertSqlQuery);
      const getAllTaskToDoSqlQuery = `SELECT tasksToDo FROM todolist.tasks WHERE email = "${ email }"`;
      const response: any = await Database.dbPool.query(getAllTaskToDoSqlQuery);
      let tasksToDo;
      if (response[0][0]?.tasksToDo) {
        tasksToDo = response[0][0].tasksToDo;
      } else {
        const insertNewUserWithEmptyTasksSqlQuery = `INSERT INTO todolist.tasks (email, tasksToDo) VALUES ('${ email }', '[]')`;
        await Database.dbPool.query(insertNewUserWithEmptyTasksSqlQuery);
        tasksToDo = [];
      }
      return tasksToDo;
    } catch (e) {
      console.log("Error happen while trying to insert new row to the table", e);
    }
  }

  insertTasksByEmail = async (email: string, tasksToDo: Array<string>) => {
    const insertTasksToDoSqlQuery = `UPDATE todolist.tasks SET tasksToDo = '${JSON.stringify(tasksToDo)}' WHERE email = '${email}';`;
    try {
      const res = await Database.dbPool.query(insertTasksToDoSqlQuery);
      console.log(res)
    } catch (e) {
      console.log("Error happen while trying to insert new row to the table", e);
    }
  }


}

export default Database;