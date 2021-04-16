import { createGlobalStyle } from 'styled-components';
import font from '../../assets/fonts/Signika/Signika-Regular.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Signika, 'sans-serif';
    src: url(${font}) format('truetype');
    font-style: normal;
  }
`;

export default GlobalStyles;
