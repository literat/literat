import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => (
  <div>
    <Helmet htmlAttributes={{ lang: 'en' }} title="Literat - Fullstack Developer & Whitewater Kayaker & Scout" />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Signika',
      }}
    >
      <h2>Hi, I am Literat.</h2>
      <p>The Fullstack Developer from Czech republic 🇨🇿</p>
    </div>
  </div>
);

export default HomePage;
