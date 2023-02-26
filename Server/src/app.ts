import express, { Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import ToDoList from "./domain";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const router: Router = express.Router();
app.use('/', router);


const todolistInstance = ToDoList.getInstance()


router.post('/logInUserAndReturnExistsTasks', async (req: Request, res: Response) => {
  try {
    console.log('/logInUserAndReturnExistsTasks API');
    const { userData } = req.body;
    const { name, email, imageUrl } = userData;
    if (!name || !email || !imageUrl) {
      throw new Error("missing params");
    }
    const tasksToDo = await todolistInstance.userLogInAndReturnExistsTasks(email, name, imageUrl);
    res.json({tasksToDo});
  } catch (e) {
    console.log("Error in /logInUserAndReturnExistsTasks Api - ", e);
    res.status(400).json({ error: 'error in logInUserAndReturnExistsTasks Api' });
  }
});

router.post('/addTasks', async (req: Request, res: Response) => {
  try {
    console.log('/addTasks API');

    const { email, tasksToDo } = req.body;
    if (!tasksToDo || !email) {
      throw new Error("missing params");
    }
    await todolistInstance.insertTask(email, tasksToDo);
    res.json({message: 'addToDoTask'});
  } catch (e) {
    console.log("Error in /addToDoTask Api - ", e);
    res.status(400).json({ error: 'error in addTasks Api' });
  }
});




export default app;
