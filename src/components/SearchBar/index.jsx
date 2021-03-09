import React from "react";
import styled from "styled-components";
import { colours } from "styles/colours";
const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 4/-4;
  margin: 50px 0;
`;

const SearchInput = styled.input`
  flex: 4;
  border: none;
  padding: 15px 15px;
  border-radius: 10px 0px 0px 10px;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  background-color: #fff;
  transition: 0.3s;
  font-weight: 100;
  colour: ${colours.primaryDark};

  &:focus {
    outline-width: 0;
    box-shadow: inset 0 0 10px rgba(27, 16, 38, 0.5);
  }
`;

const SearchSubmit = styled.input`
  flex: 1;
  font-size: 1.2rem;
  border: none;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
  padding: 15px 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  colour: ${colours.primaryDark};
  background-color: ${colours.primaryMain};
`;

const SearchBar = () => {
  return (
    <Container>
      <SearchInput type="text" placeholder="search movie by title" />
      <SearchSubmit type="submit" value="search"></SearchSubmit>
    </Container>
  );
};

export default SearchBar;
