import styled from "@emotion/styled";
import React from "react";
import { LINE_THROUGH } from "../utils/constants";

const TodoStyled = styled.div<{ isSelected: boolean }>`
  background-color: ${ (props: any) => props.theme.color.primary };
  padding: 8px;
  margin: 8px;
  border-radius: 16px;
  cursor: pointer;
  width: auto;
  text-decoration: ${ (props: any) => props.isSelected && LINE_THROUGH };
`;

interface Props {
  todo: any,
  toggleHandler: any,
  taskNumber: number
}

export const ToDo: React.FC<Props> = ({todo, toggleHandler, taskNumber}) => {
  return (
    <TodoStyled
      isSelected={ todo.isComplete }
      onClick={ () => {
        toggleHandler(todo);
      } }
    >{taskNumber + ')' + ' ' + todo.theTask }
    </TodoStyled>
  );
}

export default ToDo;
