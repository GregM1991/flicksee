import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  grid-column: 2/-2;
`;

const MovieCardsContainer = ({ children }) => <Container>{children}</Container>;

export default MovieCardsContainer;
