import React from "react";
import { ButtonRegularStyled } from "../styled/styleComponents";



interface Props {
  filterCompleteHandler: () => void
}

export const ClearCompletedTasks: React.FC<Props> = ({ filterCompleteHandler }) => {
  return (
    <ButtonRegularStyled onClick={filterCompleteHandler}>
      Clear All The Tasks
    </ButtonRegularStyled>
  );
}

export default ClearCompletedTasks;
