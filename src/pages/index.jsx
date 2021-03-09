import Head from "next/head";
import styled from "styled-components";
import MainPage from "components/MainPage";
import Nav from "components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flicksee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <MainPage />
    </>
  );
}
