import React from "react";
import styled from "styled-components";
import { colours } from "styles/colours";

const WrapperStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  gap: 0 10px;
  padding: 50px 0;
  background-color: ${colours.primaryDark};
  color: #fff;
  height: 100%;
`;

const GridWrapper = ({ children }) => <WrapperStyles>{children}</WrapperStyles>;

export default GridWrapper;
