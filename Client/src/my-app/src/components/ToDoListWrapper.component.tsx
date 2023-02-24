import React, { useEffect } from "react";

import { useState } from "react";

import ToDoList from "./ToDoList.component";
import FormScope from "./FormScope.component";
import ClearCompletedTasks from "./ClearCompletedTasks.component";
import { IToDoListData } from "../utils/interface";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ToDoListState } from "../redux/reducer";
import { addNewTaskAction, setAllTaskAction } from "../redux/actions";
import { ADD_TASKS_API } from "../utils/constants";
import styled from "@emotion/styled/dist/emotion-styled.cjs";
import { BasicButton } from "../styled/buttons";


interface Props {
  loginData: any,
  tasksToDo?: Array<IToDoListData>
}

const SaveBtnStyled = styled(BasicButton)`
  height: 50px;
  width: 400px;
  background-color: darkseagreen;
  align-self: center;
  
`;

export const ToDoListWrapper: React.FC<Props> = ({ loginData}) => {
  const dispatch = useDispatch();
  const toDoListData = useSelector<ToDoListState, Array<IToDoListData>>((state) => state.tasksToDo);



  const addNewTask = (taskByName: string) => {
    const newTask: IToDoListData = {
      id: toDoListData.length,
      theTask: taskByName,
      isComplete: false,
    };
    dispatch(addNewTaskAction(newTask))
  };


  // add interface
  const toggleHandler = (taskToHandle: any) => {
    const newList = toDoListData.map((task: any) => {
      return taskToHandle.id === task.id
        ? {...task, isComplete: !task.isComplete}
        : {...task};
    });
    dispatch(setAllTaskAction(newList));
  };


  const setTheTaskInDB = async (e: any) => {
    const onlyTasksToSave = toDoListData.filter((task) => {
      return !task.isComplete
    });
    const tasksData = onlyTasksToSave.map((onlyTasksToSave) => {
      return onlyTasksToSave.theTask
    })
    await axios.post(ADD_TASKS_API, {
      email: loginData.profileObj.email,
      tasksToDo: tasksData,
    })
    dispatch(setAllTaskAction(onlyTasksToSave));

  };

  return (
    <div>
      <ToDoList toDoList={ toDoListData } toggleHandler={ toggleHandler }/>
      <FormScope addNewTaskHandler={ addNewTask } toDoListData={toDoListData}/>

      <div style={{display: "flex", flexDirection: "column"}}>
        <SaveBtnStyled onClick={ setTheTaskInDB }>Save All Changes</SaveBtnStyled>
      </div>
    </div>
  );
}

export default ToDoListWrapper;
