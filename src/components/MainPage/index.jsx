import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GridWrapper from "components/GridWrapper";
import SearchBar from "components/SearchBar";
import axios from "axios";

const CustomGridWrapper = styled(GridWrapper)`
  padding-top: 80px;
`;

const MainPage = () => {
  const [thing, setThing] = useState(undefined);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/76341?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <CustomGridWrapper>
      <SearchBar />
    </CustomGridWrapper>
  );
};

export default MainPage;
