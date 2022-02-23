import React from "react";
import styled from "styled-components";

export interface IConsole {
  color?: string;
}

const StyledConsole = styled.textarea<IConsole>`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  resize: none;
  color: ${(props) => props.color};
  &:focus {
    outline: none;
  }
`;

const Console = (props: IConsole) => {
  return <StyledConsole {...props} />;
};

export default Console;
