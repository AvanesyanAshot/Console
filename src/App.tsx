import React from "react";
import styled from "styled-components";
import Button from "./style/Button";
import Console from "./style/Console";
import Flex from "./style/Flex";
import Title from "./style/Title";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`;

function App() {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title color={"green"}>Hello</Title>
      </Flex>
      <Flex direction="column">
        <Console />
        <Button outlined color="green" align="flex-end">
          Отправить
        </Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
