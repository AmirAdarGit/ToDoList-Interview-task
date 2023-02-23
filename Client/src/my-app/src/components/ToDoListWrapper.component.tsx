import React, { ReactElement } from "react";

import { useState } from "react";
import { nanoid } from "nanoid";

import ToDoList from "./ToDoList.component";
import FormScope from "./FormScope.component";
import ClearCompletedTasks from "./ClearCompletedTasks.component";


interface Props {
  logOutHandler: any,
  loginData: any
}
export const ToDoListWrapper: React.FC<Props> = ({ logOutHandler, loginData }) => {
  const [toDoList, setToDoList] = useState<any>();

  const addNewTask = (taskByName: string) => {
    const newTask = {
      id: nanoid(5),
      theTask: taskByName,
      isComplete: false,
    };

    let toDoListCopy = [...toDoList];
    toDoListCopy = [...toDoListCopy, newTask];
    setToDoList(toDoListCopy);
  };


  // add interface
  const toggleHandler = (taskToHandle: any) => {
    const newList = toDoList.map((task: any) => {
      return taskToHandle.id === task.id
        ? { ...task, isComplete: !task.isComplete }
        : { ...task };
    });
    setToDoList(newList);
  };

  const filterCompleteHandler = () => {
    const filterTasks = toDoList.filter((task: any) => {
      return task.isComplete === false;
    });
    setToDoList(filterTasks);
  };

  return (
    <div>
      <h3>You logged in as {loginData.profileObj.email}</h3>
      <img src={loginData.profileObj.imageUrl} alt="new" />
      <ToDoList toDoList={toDoList} toggleHandler={toggleHandler}/>
      <ClearCompletedTasks
        filterCompleteHandler={filterCompleteHandler}
      />
      <FormScope addNewTaskHandler={addNewTask}/>
      <button onClick={logOutHandler}>Log-Out</button>
    </div>
  );
}

export default ToDoListWrapper;
