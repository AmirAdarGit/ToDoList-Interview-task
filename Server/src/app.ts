import express, { Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import ToDoList from "./domain";

// create a new Express app
const app = express();

// configure middleware to parse incoming requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors()); // Use this after the variable declaration

const router: Router = express.Router();
app.use('/', router);


const todolistInstance = ToDoList.getInstance()

// router.get('/getAllToDoList', (req: Request, res: Response) => {
//   try {
//     todolistInstance.getAllTasks()
//     res.json({message: 'getAllToDoList'});
//   } catch (e) {
//     console.log("Error in /gerAllToDoList Api - ", e);
//   }
// });
//
// router.post('/addToDoTask', (req: Request, res: Response) => {
//   try {
//     // todolistInstance.insertTask()
//     res.json({message: 'addToDoTask'});
//   } catch (e) {
//     console.log("Error in /addToDoTask Api - ", e);
//   }
//
// });
// router.delete('/delete', (req: Request, res: Response) => {
//   try {
//     // todolistInstance.insertTask()
//     res.json({message: 'delete'});
//   } catch (e) {
//     console.log("Error in /delete Api - ", e);
//   }
// });

router.post('/logInUserAndReturnExistsTasks', async (req: Request, res: Response) => {
  try {
    console.log("121212121121121212")
    const { userData } = req.body;
    const { name, email, imageUrl } = userData;
    if (!name || !email || !imageUrl) {
      throw new Error("missing params");
    }
    const tasksToDo = await todolistInstance.userLogInAndReturnExistsTasks(email, name, imageUrl);
    console.log("tasksToDo", tasksToDo)
    res.json({tasksToDo});
  } catch (e) {
    console.log("Error in /addToDoTask Api - ", e);
  }
});

router.post('/addTasks', async (req: Request, res: Response) => {
  try {
    console.log("in add Tasks")
    const { email, tasksToDo } = req.body;
    if (!tasksToDo || !email) {
      throw new Error("missing params");
    }
    await todolistInstance.insertTask(email, tasksToDo);
    res.json({message: 'addToDoTask'});
  } catch (e) {
    console.log("Error in /addToDoTask Api - ", e);
  }
});




export default app;
