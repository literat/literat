import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <>
    <h1>Damn, eh!</h1>
    <p>404.</p>
    <p>
      This page doesn't exist. If you think this is an error{' '}
      <Link to="/contact">contact me</Link>.
    </p>
  </>
);

export default NotFoundPage;
