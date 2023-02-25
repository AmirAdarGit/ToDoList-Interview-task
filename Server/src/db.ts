import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

import {
  CREATE_TASKS_TABLE,
  CREATE_USERS_TABLE,
  DESCRIBE_SQL_QUERY, insertIntoTasksTableEmptyListQuery,
  insertIntoUserTableQuery, selectTasksToDoFromTasksTableQuery, updateIntoTasksTableListOfTasksQuery
} from "./utils/db.queries";
import { ER_NO_SUCH_TABLE, LOCALHOST, ROOT } from "./utils/constance";

class Database {

  private static dbInstance: Database;
  private static dbPool: mysql.Pool;

  private constructor() {
    this.connectToDb();
    this.createTables();
  }

  private connectToDb() {
    Database.dbPool = mysql.createPool({
      host: LOCALHOST,
      user: ROOT,
      password: process.env.DATABASE_ROOT_PASSWORD,
    });
  }

  private createTables = async () => {
    try {
      await this.createUsersTable()
    } catch (e) {
      console.log("Fail to create users table", e);
    }
    try {
      await this.createTasksTable()
    } catch (e) {
      console.log("Fail to create tasks table", e);
    }

  }

  private createUsersTable = async () => {

    try {
      await Database.dbPool.query(DESCRIBE_SQL_QUERY);
      console.log("Users table exist, should not create new table")
    } catch (e: any) { // if the table is not exist create new table
      if (e.code === ER_NO_SUCH_TABLE) {
        console.log("Users table does not exist, should create table")
        await Database.dbPool.query(CREATE_USERS_TABLE);
        console.log("created users table")
      }
      console.log(e)
    }
  }

  private createTasksTable = async () => {
    try {
      await Database.dbPool.query(DESCRIBE_SQL_QUERY);
      console.log("Tasks table exist, should not create new table")
    } catch (e: any) { // if the table is not exist create new table
      if (e.code === ER_NO_SUCH_TABLE) {
        console.log("Tasks table does not exist, should create table")
        await Database.dbPool.query(CREATE_TASKS_TABLE);
        console.log("created tasks table")
      }
    }
  }

  public static getInstance(): Database | undefined {

    if (!Database.dbInstance) {
      this.dbInstance = new Database();
      return this.dbInstance;
    }
  }

  userLogInAndReturnExistsTasks = async (email: string, name: string, imageUrl: string) => {
    try {
      await Database.dbPool.query(insertIntoUserTableQuery(email,name,imageUrl));
      const response: any = await Database.dbPool.query(selectTasksToDoFromTasksTableQuery(email));
      let tasksToDo;
      if (response[0][0]?.tasksToDo) {
        tasksToDo = response[0][0].tasksToDo;
      } else {
        await Database.dbPool.query(insertIntoTasksTableEmptyListQuery(email));
        tasksToDo = [];
      }
      return tasksToDo;
    } catch (e) {
      console.log("Error happen while trying to insert new row to the table", e);
    }
  }

  insertTasksByEmail = async (email: string, tasksToDo: Array<string>) => {
    try {
      await Database.dbPool.query(updateIntoTasksTableListOfTasksQuery(tasksToDo, email));
    } catch (e) {
      console.log("Error happen while trying to insert new row to the table", e);
    }
  }


}

export default Database;