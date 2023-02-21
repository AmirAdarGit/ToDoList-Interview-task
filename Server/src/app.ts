import express, { Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import ToDoList from "./domain";

// create a new Express app
const app = express();

// configure middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router: Router = express.Router();
app.use('/', router);


const todolistInstance = ToDoList.getInstance()

router.get('/getAllToDoList', (req: Request, res: Response) => {
  todolistInstance.getAllTasks()
  res.json({ message: 'getAllToDoList' });
});
router.post('/addToDoTask', (req: Request, res: Response) => {
  todolistInstance.insertTask()
  res.json({ message: 'addToDoTask' });
});
router.delete('/delete', (req: Request, res: Response) => {
  todolistInstance.insertTask()
  res.json({ message: 'delete' });
});
router.delete('/addToDoTask', (req: Request, res: Response) => {
  todolistInstance.insertTask()
  res.json({ message: 'addToDoTask' });
});


export default app;
