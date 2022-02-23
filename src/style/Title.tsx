import React from "react";
import styled from "styled-components";

export interface ITitle {
  color?: string;
  children: string;
}

const StyledTitle = styled.h1<ITitle>`
  color: ${(props) => props.color || props.theme.colors.secondary};
`;

const Title = (props: ITitle) => {
  return <StyledTitle {...props} />;
};

export default Title;
