import React, { useEffect } from "react";

import { useState } from "react";

import ToDoList from "./ToDoList.component";
import FormScope from "./FormScope.component";
import ClearCompletedTasks from "./ClearCompletedTasks.component";
import { IToDoListData } from "../utils/interface";
import axios from "axios";


interface Props {
  logOutHandler: any,
  loginData: any,
  tasksToDo?: Array<IToDoListData>
}

export const ToDoListWrapper: React.FC<Props> = ({logOutHandler, loginData, tasksToDo}) => {

  const [toDoList, setToDoList] = useState<Array<IToDoListData>>(tasksToDo ? tasksToDo : []);

  useEffect(() => {
    if (tasksToDo) {
      setToDoList(tasksToDo);
    }
  }, [tasksToDo])


  const addNewTask = (taskByName: string) => {
    const newTask: IToDoListData = {
      id: toDoList?.length,
      theTask: taskByName,
      isComplete: false,
    };
    let toDoListCopy: Array<IToDoListData> = [...toDoList, newTask];
    setToDoList(toDoListCopy);
  };


  // add interface
  const toggleHandler = (taskToHandle: any) => {
    const newList = toDoList.map((task: any) => {
      return taskToHandle.id === task.id
        ? {...task, isComplete: !task.isComplete}
        : {...task};
    });
    setToDoList(newList);
  };

  const filterCompleteHandler = () => {
    const filterTasks = toDoList.map((task: any) => {
      return {
        id: task.id,
        theTask: task.theTask,
        isComplete: true
      }
    });
    setToDoList(filterTasks);
  };

  const setTheTaskInDB = async (e: any) => {
    console.log("toDoList", toDoList)
    const onlyTasksToSave = toDoList.filter((task) => {
      return task.isComplete === false
    }).map((task) => {
      return task.theTask
    })
    await axios.post("http://localhost:4000/addTasks", {
      email: loginData.profileObj.email,
      tasksToDo: onlyTasksToSave,
    })
  };

  return (
    <div>
      <h3>You logged in as { loginData.profileObj.email }</h3>
      <img src={ loginData.profileObj.imageUrl } alt="new"/>
      <ToDoList toDoList={ toDoList } toggleHandler={ toggleHandler }/>
      <ClearCompletedTasks
      filterCompleteHandler={filterCompleteHandler}
      />
      <FormScope addNewTaskHandler={ addNewTask }/>
      <div style={{display: "flex", flexDirection: "column"}}>
        <button style={ {backgroundColor: 'red'} } onClick={ setTheTaskInDB }>Save All Changes</button>
        <button onClick={ logOutHandler }>Log-Out</button>
      </div>
    </div>
  );
}

export default ToDoListWrapper;
