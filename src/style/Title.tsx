import React from "react";
import styled from "styled-components";

export interface ITitle {
  color: string;
}

const StyledTitle = styled.h1`
  color: ${(props) => props.color || props.theme.colors.primary};
`;

const Title = (props: ITitle) => {
  return <StyledTitle {...props} />;
};

export default Title;
