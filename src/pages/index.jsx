import Head from "next/head";
import styled from "styled-components";
import axios from "axios";
import SearchBar from "components/SearchBar";
import GridWrapper from "components/GridWrapper";
import MovieCard from "components/organisms/MovieCard";
import MovieCardsContainer from "../components/organisms/MovieCardsContainer";

const CustomGridWrapper = styled(GridWrapper)`
  padding-top: 80px;
`;

const Home = ({ latestMovies }) => {
  return (
    <>
      <Head>
        <title>Flicksee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomGridWrapper>
        <SearchBar />
      </CustomGridWrapper>
      <CustomGridWrapper>
        <MovieCardsContainer>
          <MovieCard />
        </MovieCardsContainer>
      </CustomGridWrapper>
    </>
  );
};

export async function getStaticProps(context) {
  const latestMoviesQuery = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );

  const latestMovies = latestMoviesQuery.data;

  return {
    props: { latestMovies: latestMovies },
  };
}

export default Home;
