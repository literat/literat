
import React from 'react';
import FiraCode from '../assets/fonts/Fira/Code/Fira-Code-Regular.woff2';
import FiraCodeSemiBold from '../assets/fonts/Fira/Code/Fira-Code-SemiBold.woff2';
import OverpassItalic from '../assets/fonts/Overpass/Overpass-Black-Italic.woff2';
import Overpass from '../assets/fonts/Overpass/Overpass-Bold.woff2';

const fontCSS = `
  @font-face {
    font-family: 'Fira Code';
    src: url(${FiraCode}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Fira Code';
    src: url(${FiraCodeSemiBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

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


  @font-face {
    font-family: 'Overpass';
    src: url(${Overpass}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Overpass Italic';
    src: url(${OverpassItalic}) format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
`;

export default function Fonts() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: fontCSS,
      }}
    />
  );
}
