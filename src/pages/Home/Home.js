import React from "react";
import styled from "styled-components";
import { Info } from "../../components/Info/Info";
import { Feed } from "../../components/Feed/Feed";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);
`;

const NavContainer = styled.div`
  height: 100%;
  border-right: 1px solid darkgray;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 300px minmax(0, 1fr);
`;

export function Home(props) {
  return (
    <Container>
      <NavContainer></NavContainer>
      <MainContainer>
        <Info />
        <Feed />
      </MainContainer>
    </Container>
  );
}
