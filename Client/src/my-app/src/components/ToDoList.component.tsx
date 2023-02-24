import styled from "@emotion/styled";
import React from "react";
import ToDo from "./ToDo.compontne";

const ToDoListWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 700px;
  overflow-y: auto;
`;

interface Props {
  toDoList: any,
  toggleHandler: any,
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
