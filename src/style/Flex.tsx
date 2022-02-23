import React from "react";
import styled from "styled-components";

export interface IFlex {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
  children: any;
}
const StyledFlex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${({ margin }) => margin || "0"};
`;

const Flex = (props: IFlex) => {
  return <StyledFlex {...props} />;
};

export default Flex;
