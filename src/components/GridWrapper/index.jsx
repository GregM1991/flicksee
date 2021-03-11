import React from "react";
import styled from "styled-components";
import { colours } from "styles/colours";

const WrapperStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  gap: 0 10px;
  background-color: ${colours.primaryDark};
  color: #fff;
`;

const GridWrapper = ({ className, children }) => (
  <WrapperStyles className={className}>{children}</WrapperStyles>
);

export default GridWrapper;
