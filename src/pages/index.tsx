import React from 'react';
import { Helmet } from 'react-helmet';
import H from '../components/mdx/Headings';

const HomePage = () => (
  <div>
    <Helmet htmlAttributes={{ lang: 'en' }} title="Literat - Fullstack Developer & Whitewater Kayaker & Scout" />
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
