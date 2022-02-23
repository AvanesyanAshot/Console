import React from "react";
import styled, { css, keyframes } from "styled-components";

export interface IButton {
  color?: string;
  background?: string;
  align?: string;
  primary?: boolean;
  outlined?: boolean;
  children: any;
}

const rotateAnimation = keyframes`
0% {
    transform: rotateZ(0deg);
}
100% {
    transform: rotateZ(360deg);
}
`;

const StyledButton = styled.button.attrs((props) => ({
  outlined: true,
}))`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${rotateAnimation} 1s infinite linear;
  }
  align-self: ${(props: IButton) => props.align || "stretch"};
  ${(props) =>
    props.primary &&
    css`
      color: ${(props: IButton) => props.color || "white"};
      background: ${(props) => props.background || "white"};
    `}
  ${(props) =>
    props.outlined &&
    css`
      color: ${(props: IButton) => props.color || "white"};
      border: 1px solid ${(props) => props.color || "white"};
      background: transparent;
    `}
`;

const LargeButton = styled(StyledButton)`
  font-size: 32px;
`;

const Button = (props: IButton) => {
  return <LargeButton {...props} />;
};

export default Button;
