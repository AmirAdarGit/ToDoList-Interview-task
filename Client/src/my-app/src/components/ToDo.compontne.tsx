import React from "react";
import { TodoStyled } from "../styled/styleComponents";
import { IToDoListData } from "../utils/interface";


interface Props {
  todo: IToDoListData,
  toggleHandler: (todo: IToDoListData) => void,
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
