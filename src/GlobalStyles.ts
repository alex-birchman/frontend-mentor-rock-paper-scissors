import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Barlow Semi Condensed', sans-serif;
    background: radial-gradient(134.34% 134.34% at 50% 0%, hsl(214.29deg 47.46% 23.14%) 0%, hsl(236.67deg 48.65% 14.51%) 100%);;
    color: white;

    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
  }

  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 32px;

    overflow: hidden;
  }
`;

export default GlobalStyles;
