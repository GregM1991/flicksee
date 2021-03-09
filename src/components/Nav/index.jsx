import React from "react";
import styled from "styled-components";
import { colours } from "styles/colours";
import Link from "next/link";

const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1%;
  height: 80px;
  font-family: "Poppins", sans-serif;
  color: ${colours.primaryMain};
  backdrop-filter: brightness(105%) blur(20px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const LogoContainer = styled.div`
  grid-column: 2/4;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-weight: 700;
  font-size: 1.2em;
  line-height: 1.3em;
  cursor: pointer;

  @media (min-width: 2000px) {
    grid-column: 4;
  }
`;

const LinksContainer = styled.ul`
  grid-column: -2/-4;
  cursor: pointer;
  margin: auto 0 auto auto;
  font-family: "Poppins", sans-serif;

  a {
    list-style: none;
    font-size: 1.2rem;
    font-weight: 100;
  }

  a + a {
    margin-left: 25px;
  }

  @media (min-width: 2000px) {
    grid-column: -4/-6;
  }
`;

const Nav = () => (
  <NavContainer>
    <Link href="/">
      <LogoContainer>
        <h1>Flicksee</h1>
      </LogoContainer>
    </Link>

    <LinksContainer>
      <Link href="/work">
        <a>Register</a>
      </Link>
      <Link href="/about">
        <a>Login</a>
      </Link>
    </LinksContainer>
  </NavContainer>
);

export default Nav;
