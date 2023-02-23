import styled from "@emotion/styled";
import React from "react";

const HeaderStyled = styled.div`
  font-size: 45px;
  font-variant: 56px;
  font-style: italic;
  margin: 16px;
`;

function Header() {
  return <HeaderStyled>To Do List</HeaderStyled>;
}

export default Header;
