import styled from "@emotion/styled/dist/emotion-styled.cjs";
import { LINE_THROUGH } from "../utils/constants";
import { BasicButton, SelectButton } from "./buttons";

export const FooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 0px;
`;

export const LogoStyled = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const FooterInfoStyled = styled.div`
  background-color: black;
  color: white;
  border-radius: 8px;
  height: 20px;
  width: 25%;
  text-align: center;
`;

export const PageWrapper = styled.div`
  height: calc(100vh - 50px);
  padding: 20px;
  margin: 4px;
  background-color: #61dafb;
  border-radius: 16px;
  position: relative;
`;

export const InputRegularStyled = styled.input`
  border-radius: 8px !important;
  width: 500px;
  font-size: 25px;
  background-color: #61dafb;
`;
export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const TodoStyled = styled.div<{ isSelected: boolean }>`
  background-color: ${ (props: any) => props.theme.color.primary };
  padding: 8px;
  margin: 8px;
  border-radius: 16px;
  cursor: pointer;
  width: auto;
  text-decoration: ${ (props: any) => props.isSelected && LINE_THROUGH };
`;

export const ToDoListWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 700px;
  overflow-y: auto;
`;

export const SaveBtnStyled = styled(BasicButton)`
  height: 50px;
  width: 400px;
  background-color: darkseagreen;
  align-self: center;
`;

export const ButtonRegularStyled = styled(SelectButton)`
  width: 243px;
`;

export const HeaderStyled = styled.div`
  font-size: 45px;
  font-variant: 56px;
  font-style: italic;
`;