import { createGlobalStyle } from 'styled-components';

import FiraSans from '../assets/fonts/Fira/Sans/FiraSans-Regular.ttf';
import FiraCode from '../assets/fonts/Fira/Code/FiraCode-Regular.ttf';
import FiraCodeSemiBold from '../assets/fonts/Fira/Code/FiraCode-SemiBold.ttf';
import Overpass from '../assets/fonts/Overpass/Overpass-Bold.woff';
import OverpassMono from '../assets/fonts/OverpassMono/OverpassMono-Regular.ttf';
import OverpassItalic from '../assets/fonts/Overpass/Overpass-BlackItalic.ttf';

const Fonts = createGlobalStyle`
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
    font-family: 'Fira Code';
    src: url(${FiraCodeSemiBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Overpass';
    src: url(${Overpass}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Overpass Italic';
    src: url(${OverpassItalic}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Overpass Mono';
    src: url(${OverpassMono}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
`;

export default Fonts;
