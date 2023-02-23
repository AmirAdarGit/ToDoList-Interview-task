import styled from "@emotion/styled";
import React from "react";
import exp from "constants";
const TodoStyled = styled.div<{isSelected: boolean}>`
  background-color: ${(props: any) => props.theme.color.inputPlaceholder};
  padding: 8px;
  margin: 8px;
  border-radius: 16px;
  cursor: pointer;
  width: auto;
  text-decoration: ${(props: any) => props.isSelected && "line-through"};
`;

interface Props {
  todo: any,
  toggleHandler: any
}

export const ToDo: React.FC<Props> = ({ todo, toggleHandler }) => {
  return (
    <TodoStyled
      isSelected={todo.isComplete}
      onClick={() => {
        toggleHandler(todo);
        console.log(todo.isComplete);
      }}
    >
      {todo.theTask}
    </TodoStyled>
  );
}

export default ToDo;
