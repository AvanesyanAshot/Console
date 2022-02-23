import React, { useState } from "react";
import styled from "styled-components";
import Flex from "./Flex";
import Line from "./Line";

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

const Console = ({ color, ...props }: IConsole) => {
  const [lines, setLines] = useState(["C:/Windows>"]);

  const onKeyPress = (e: any) => {
    if (e.charCode === 13) {
      setLines([...lines, "C:/Windows>"]);
    }
  };
  return (
    <Flex>
      <Flex direction={"column"} margin="0 10px">
        {lines.map((line, i) => (
          <Line color={color} key={i}>
            {line}
          </Line>
        ))}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
    </Flex>
  );
};

export default Console;
