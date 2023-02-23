import styled from "@emotion/styled";
import React, { FormEvent, ChangeEvent } from "react";
import { useState } from "react";
import { SelectButton } from "../styled/buttons";

const ButtonRegularStyled = styled(SelectButton)`
  height: 21px !important;
`;
const InputRegularStyled = styled.input`
  border-radius: 8px !important;
`;

interface Props {
  addNewTaskHandler: (inputTask: string) => void
}

export const FormScope: React.FC<Props> = ({ addNewTaskHandler }) => {
  const [inputTask, setInputTask] = useState("");

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement> ) => {
    setInputTask(e.currentTarget.value);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTaskHandler(inputTask);
    setInputTask("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <InputRegularStyled
        value={inputTask}
        placeholder="input new task"
        type="text"
        onChange={onChangeHandle}
      />
      <ButtonRegularStyled>Submit</ButtonRegularStyled>
    </form>
  );
}

export default FormScope;
