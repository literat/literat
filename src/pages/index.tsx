import React from 'react';
import H from '../components/mdx/Headings';
import SiteMetaTags from '../components/SiteMetaTags';

const Head = () => {
  return (
    <SiteMetaTags title="Literat - Fullstack Developer & Whitewater Kayaker & Scout" />
  );
};

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
export { Head };
