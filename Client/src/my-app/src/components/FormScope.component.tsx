import styled from "@emotion/styled";
import React, { FormEvent, ChangeEvent } from "react";
import { useState } from "react";
import { SelectButton } from "../styled/buttons";
import ClearCompletedTasks from "./ClearCompletedTasks.component";
import { setAllTaskAction } from "../redux/actions";
import { useDispatch } from "react-redux";
import { INPUT_NEW_TASK } from "../utils/constants";


const InputRegularStyled = styled.input`
  border-radius: 8px !important;
  width: 500px;
  font-size: 25px;
  background-color: #61dafb;
`;
const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;


interface Props {
  addNewTaskHandler: (inputTask: string) => void,
  toDoListData: any;
}

export const FormScope: React.FC<Props> = ({addNewTaskHandler, toDoListData}) => {
  const [inputTask, setInputTask] = useState("");
  const dispatch = useDispatch();

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.currentTarget.value);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputTask.length === 0) {
      return
    }
    addNewTaskHandler(inputTask);
    setInputTask("");
  };
  const filterCompleteHandler = () => {
    const filterTasks = toDoListData.map((task: any) => {
      return {
        id: task.id,
        theTask: task.theTask,
        isComplete: true
      }
    });
    dispatch(setAllTaskAction(filterTasks));

  };

  return (
      <FormWrapper onSubmit={ onSubmitHandler }>
        <InputRegularStyled
          value={ inputTask }
          placeholder={INPUT_NEW_TASK}
          type="text"
          onChange={ onChangeHandle }
        />
        <SelectButton>Submit</SelectButton>
        <ClearCompletedTasks
          filterCompleteHandler={filterCompleteHandler}
        />
      </FormWrapper>
  );
}

export default FormScope;
