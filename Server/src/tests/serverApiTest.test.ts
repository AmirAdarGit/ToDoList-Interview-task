import app from '../app';
import supertest from 'supertest';
import mysql from "mysql2/promise";
import { LOCALHOST, ROOT } from "../utils/constance";


afterAll(async () => {

  // remove the tested user and the tested tasks from the DB
  const testDbInstance = mysql.createPool({
    host: LOCALHOST,
    user: ROOT,
    password: process.env.DATABASE_ROOT_PASSWORD,
  });
  await testDbInstance.query(`DELETE FROM todolist.tasks WHERE email = "yovel@gmail.com"`);
  await testDbInstance.query(`DELETE FROM todolist.users WHERE email = "yovel@gmail.com"`);
  testDbInstance.end()
});

describe('API of server requests:', () => {
  const request = supertest(app);
  describe('API post /logInUserAndReturnExistsTasks', () => {

    it('should return a 200 status with empty tasks to do []', async () => {

      const response = await request.post('/logInUserAndReturnExistsTasks').send({
        "userData": {
          "name": "yovel adar",
          "email": "yovel@gmail.com",
          "imageUrl": "https://lh3.googleusercontent.com/a/AEdFTp6kuss7Ij-vX7ifSFKXAILuP-0e9YuiYO2UR7XSphw=s96-c"
        }
      });
      expect(response.status).toBe(200);
      const responseToJson = JSON.parse(response.text);
      expect(responseToJson.tasksToDo).toStrictEqual([]);
    });

    it('when missing params should fail and return status 400', async () => {
      const response = await request.post('/logInUserAndReturnExistsTasks').send({
        "userData": {
          "email": "yovel@gmail.com",
          "imageUrl": "https://lh3.googleusercontent.com/a/AEdFTp6kuss7Ij-vX7ifSFKXAILuP-0e9YuiYO2UR7XSphw=s96-c"
        }
      });
      expect(response.status).toBe(400);
    });
  });


  describe('API post /addTasks', () => {

    it('should return a 200 status with message addToDoTask', async () => {

      const response = await request.post('/addTasks').send({
        "email": "yovel@gmail.com",
        "tasksToDo": [
          "aaa",
          "sss",
          "ccc"
        ]
      });
      expect(response.status).toBe(200);
      const responseToJson = JSON.parse(response.text);
      expect(responseToJson.message).toStrictEqual("addToDoTask");
    });

    it('when missing params should fail and return status 400', async () => {
      const response = await request.post('/addTasks').send({
        "tasksToDo": [
          "aaa",
          "sss",
          "ccc"
        ]
      });
      expect(response.status).toBe(400);
    });
  });
});