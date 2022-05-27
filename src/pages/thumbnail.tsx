import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import GlobalStyles from '../components/styles/GlobalStyles';
import Fonts from '../components/Fonts';
import H from '../components/mdx/Headings';
import Img from '../components/Img';

function getFontSize(length) {
  if (length > 55) {
    return `2rem`;
  }

  if (length > 32) {
    return `3rem`;
  }

  return `6rem`;
}

export default function Thumbnail({ location }) {
  if (!location.href) {
    return null;
  }

  const url = new URL(location.href);
  const thumbnail = url.searchParams.get('thumbnail');
  const link = url.searchParams.get('url');
  const linkURL = new URL(link);
  const title = url.searchParams.get('title');
  const H1 = styled(H)`
    font-size: ${getFontSize(title.length)};
    margin: 0;
    line-height: 1.3;
  `;

  const ThumbStyles = createGlobalStyle`
    html {
      position: relative;
    }

    body {
      position: relative;
      z-index: -2;
      display: grid;
      & > div, & > div > div {
        display: grid;
      }
    }

    .thumbnail {
      top: 2rem;
      right: 2rem;
      width: 100%;
      height: 100%;
      align-self: start;
      object-fit: cover;
    }

    .main {
      position: relative;
      display: grid;
      grid-template-columns: 2fr ${thumbnail ? '1fr' : 'auto'};
      padding: 7rem;
    }

    .title {
      display: grid;
      grid-gap: 10px 2rem;
      grid-auto-rows: 0fr 1fr 0fr;

      .checkItOut {
        font-size: 2.5rem;
        padding-left: 3rem;
        padding-bottom: 3rem;
      }

      h1 {
        padding-left: 25px;
      }
    }

    .lower {
      display: grid;
      grid-template-columns: auto 1fr auto;
      font-family: 'Fira Code', 'sans-serif';
      grid-gap: 10px 2rem;
      align-content: center;
      align-items: center;

      .handsome {
        border-radius: 50%;
        height: 120px;
      }

      .logo {
        height: 120px;
        align-self: end;
      }

      * {
        margin: 0;
        padding: 0;
        line-height: 1;
        font-size: 2rem;
      }

      .authorName {
        font-family: 'Overpass', 'sans-serif';
        font-size: 3rem;
        align-self: end;
      }

      .link {
        font-size: 1rem;
        align-self: start;
      }
    }
  `;

  return (
    <>
      <Fonts />
      <GlobalStyles />
      <ThumbStyles />
      <div className="main">
        <div className="title">
          <div className="checkItOut">Check out this article</div>
          <H1>{title}</H1>
          <div className="lower">
            <img
              src="https://pbs.twimg.com/profile_images/1263079845677989888/NjkXXXQm_400x400.jpg"
              alt="Literat"
              className="handsome"
            />
            <div>
              <p className="authorName">literat.dev</p>
              <p className="link">
                <span className="path">{linkURL.pathname}</span>
              </p>
            </div>
            {/* <img src={logo} alt="logo" className="logo" /> */}
          </div>
        </div>
        {thumbnail && <img className="thumbnail" src={thumbnail} alt={title} />}
      </div>
    </>
  );
}
