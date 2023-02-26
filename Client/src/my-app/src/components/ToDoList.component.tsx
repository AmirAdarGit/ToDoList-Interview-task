import styled from "@emotion/styled";
import React from "react";
import { ToDoListWrapperStyled } from "../styled/styleComponents";
import ToDo from "./ToDo.compontne";
import { IToDoListData } from "../utils/interface";



interface Props {
  toDoList: Array<IToDoListData>,
  toggleHandler: (todo: IToDoListData) => void,
}

export const ToDoList: React.FC<Props> = ({ toDoList, toggleHandler }) => {
  return (
    <ToDoListWrapperStyled>
      {toDoList.map((task: any, index: number) => {
        return <ToDo todo={task} key={task.id} toggleHandler={toggleHandler} taskNumber={index + 1}/>;
      })}
    </ToDoListWrapperStyled>
  );
}

export default ToDoList;
