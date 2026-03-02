import React from 'react';
import H from '../components/mdx/Headings';
import PageMetaTags from '../components/PageMetaTags';

const HomePage = () => (
  <div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Fira Code',
      }}
    >
      <H as="h2">Hi, I am Literat.</H>
      <p>The Fullstack Developer from Czech republic 🇨🇿</p>
    </div>
  </div>
);

export default HomePage;

export const Head = () => (
  <PageMetaTags title="Literat - Fullstack Developer & Whitewater Kayaker & Scout" />
);
