import styled from "@emotion/styled";
import React from "react";
import ToDo from "./ToDo.compontne";

const ToDoListWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  toDoList: any,
  toggleHandler: any,
}

export const ToDoList: React.FC<Props> = ({ toDoList, toggleHandler }) => {
  return (
    <ToDoListWrapperStyled>
      {toDoList.map((task: any) => {
        return <ToDo todo={task} key={task.id} toggleHandler={toggleHandler} />;
      })}
    </ToDoListWrapperStyled>
  );
}

export default ToDoList;
