import "../styles/globals.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { colours } from "styles/colours";

const GlobalStyle = createGlobalStyle`
  body {
    backgroud-color: ${(props) =>
      props.theme.mode === "dark" ? colours.primaryDark : colours.primaryLight}
    color: ${(props) =>
      props.theme.mode === "light" ? colours.primaryLight : colours.primaryDark}
    }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{ mode: "light" }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
