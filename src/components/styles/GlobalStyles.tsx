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
    --red: #d20b2c;
    --blue: #2479d4;
    --purple: #D439AD;
    --grey: #888;
    --imGoingToFaint: #fafafa;

    --grvsc-border-radius: 0;
    --grvsc-padding-top: calc(1 * (1.68 * (45px + 0.2vw) + 0.2vw));
    --grvsc-padding-bottom:calc(1 * (1.68 * (45px + 0.2vw) + 0.2vw));
  }

  html {
    font-family: 'Fira Code', 'sans-serif';
    font-size: 10px;
    color: var(--dark);
  }

  body {
    font-size: 2rem;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Overpass Italic, sans-serif;
    font-weight: normal;
    /* font-style: italic; */
    line-height: 1.5;
  }

  a {
    color: var(--dark);
    text-decoration: none;
    outline: none;
  }

  p, ul, ol {
    line-height: 1.77777777777777776777777777;
    font-weight: 400;
  }

  ul {
    list-style-type: square;
  }

  p a, li a {
    --rotate: -1.1deg;
    --scaleX: 1.1;
    position: relative;
    &:before {
      height: 3px;
      position: absolute;
      background: var(--blue);
      content: '';
      width: 100%;
      bottom: -2px;
      z-index: -1;
      transition: transform 0.1s;
      transform: skew(-40deg) rotate(var(--rotate)) scaleX(var(--scaleX));
    }
    &:hover {
      --scaleX: 1.15;
    }
  }

  li a {
    --scaleX: 1;
    transform: scaleX(var(--scaleX));
  }

  .grvsc-container {
    line-height: 1.5;
  }
`;

export default GlobalStyles;
