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
    const insertSql = `INSERT IGNORE INTO todolist.users (email, name, imageUrl) VALUES ('${ email }', '${ name }', '${ imageUrl }')`;
    try {
      await Database.dbPool.query(insertSql);
      const getAllTaskToDoSql = `SELECT tasksToDo FROM todolist.tasks WHERE email = "${email}";`;
      const response: any = await Database.dbPool.query(getAllTaskToDoSql);
      const tasksToDo = response[0][0].tasksToDo;
      return tasksToDo;
    } catch (e) {
      console.log("Error happen while trying to insert new row to the table", e);
    }
  }


}

export default Database;