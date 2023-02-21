import mysql from 'mysql';

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
    Database.dbPool.query("select * from todolist.users", (res, err) => {
      if (err){
        console.log(err)
      }
      else {
        console.log(res)
      }
    })
  }


}

export default Database;