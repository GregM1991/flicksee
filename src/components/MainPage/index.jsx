import React from "react";
import styled from "styled-components";
import GridWrapper from "components/GridWrapper";
import SearchBar from "components/SearchBar";

const CustomGridWrapper = styled(GridWrapper)`
  padding-top: 80px;
`;

const MainPage = () => {
  return (
    <CustomGridWrapper>
      <SearchBar />
    </CustomGridWrapper>
  );
};

export default MainPage;
