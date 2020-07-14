import React from "react";
import styled from "styled-components";
import { Home } from "./pages/Home/Home";

const AppContainer = styled.div`
  height: 100%;
  background-color: lightgray;
`;

function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
}

export default App; 
