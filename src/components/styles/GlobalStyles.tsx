import { createGlobalStyle } from 'styled-components';
import font from '../../assets/fonts/Signika/Signika-Regular.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Signika, 'sans-serif';
    src: url(${font}) format('truetype');
    font-style: normal;
  }

  :root {
    --dark: #000000;
    --light: #ffffff;
  }

  html {
    font-family: 'Fira Code', 'sans-serif';
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Signika, sans-serif;
    font-weight: normal;
    /* font-style: italic; */
    line-height: 1.5;
  }

  a {
    color: var(--dark);
  }

  p, ul, ol {
    line-height: 1.77777777777777776777777777;
    font-weight: 400;
  }

  ul {
    list-style-type: square;
  }
`;

export default GlobalStyles;
