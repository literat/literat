import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Fira Code Fallback';
    font-style: normal;
    font-weight: 400;
    src: local('Arial');
    ascent-override: 75.29%;
    descent-override: 24.49%;
    line-gap-override: 0.00%;
    size-adjust: 131.49%;
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
    font-family: 'Fira Code', 'Fira Code Fallback', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 10px;
    color: var(--dark);
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }

  body {
    font-size: 2rem;
    margin: 0;
    height: 100%;
    width: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
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

  pre {
    margin-top: calc(2 * (1.68 * (10px + 0.2vw) + 0.2vw));
    margin-bottom: calc(2 * (1.68 * (10px + 0.2vw) + 0.2vw));
    margin-right: calc(-1 * ((80vw - 100%) / 2));
    margin-left: calc(-1 * ((80vw - 100%) / 2));
    padding: calc(1 * (1.68 * (18px + 0.2vw) + 0.2vw)) 0;
    font-size: 0.85em;
    font-family: 'Fira Code', Menlo, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;

    @media only screen and (min-width: 600px) {
      clip-path: polygon(0 calc(0% + 15px), 100% 0, 100% calc(100% - 15px), 0% 100%);
    }

    :after {
      content: attr(data-language);
      opacity: 0.7;
      display: inline-block;
      transform: translate(-16px, 24px);
      text-align: right;
      font-size: 1.5rem;
    }
  }

  pre code {
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.2em;
    padding-right: 1.2em;
  }
`;

export default GlobalStyles;
