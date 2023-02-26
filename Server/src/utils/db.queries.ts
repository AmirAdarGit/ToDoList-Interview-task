



export const CREATE_USERS_TABLE =  `CREATE TABLE todolist.users (
  email VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255),
  imageUrl VARCHAR(255)
);`

export const CREATE_TASKS_TABLE = `CREATE TABLE todolist.tasks (
  email VARCHAR(255),
  tasksToDo JSON,
  FOREIGN KEY (email) REFERENCES todolist.users(email)
);`

export const DESCRIBE_USER_TABLE_SQL_QUERY = `DESCRIBE todolist.users`
export const DESCRIBE_TASKS_TABLE_SQL_QUERY = `DESCRIBE todolist.tasks`

export const insertIntoUserTableQuery = (email: string, name: string, imageUrl: string) => {
  return `INSERT IGNORE INTO todolist.users (email, name, imageUrl) VALUES ('${ email }', '${ name }', '${ imageUrl }')`;
}

export const insertIntoTasksTableEmptyListQuery = (email: string) => {
  return `INSERT IGNORE INTO todolist.tasks (email, tasksToDo) VALUES ('${ email }', '[]')`;
}

export const updateIntoTasksTableListOfTasksQuery = (tasksToDo: Array<string>, email: string) => {
  return `UPDATE todolist.tasks SET tasksToDo = '${ JSON.stringify(tasksToDo) }' WHERE email = '${ email }';`
}

export const selectTasksToDoFromTasksTableQuery = (email: string) => {
  return `SELECT tasksToDo FROM todolist.tasks WHERE email = "${ email }"`
}

