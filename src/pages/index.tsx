import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';

const HomePage = () => (
  <Layout>
    <div>
      <Header />
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
  </Layout>
);

export default HomePage;
