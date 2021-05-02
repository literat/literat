import { createGlobalStyle } from 'styled-components';

import GothicA1ExtraBold from '../assets/fonts/Gothic/GothicA1-ExtraBold.ttf';
import FiraSans from '../assets/fonts/Fira/Sans/FiraSans-Regular.ttf';
import FiraCode from '../assets/fonts/Fira/Code/FiraCode-Regular.ttf';
import Overpass from '../assets/fonts/Overpass/Overpass-Bold.woff';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Gothic A1';
    src: url(${GothicA1ExtraBold}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Fira Sans';
    src: url(${FiraSans}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Fira Code';
    src: url(${FiraCode}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Overpass';
    src: url(${Overpass}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`;

export default Fonts;
