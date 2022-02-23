import React from "react";
import styled from "styled-components";

export interface ILine {
  color?: string;
  children?: any;
}

const StyledLine = styled.div<ILine>`
  font-size: 24px;
  color: ${(props) => props.color || props.theme.colors.primary};
`;

const Line = (props: ILine) => {
  return <StyledLine {...props} />;
};

export default Line;
