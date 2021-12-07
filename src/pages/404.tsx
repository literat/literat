import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>Here is not what are you looking for - Literat</title>
    </Helmet>
    <h1>Damn, eh!</h1>
    <p>404.</p>
    <p>
      This page doesn't exist. If you think this is an error <Link to="/contact">contact me</Link>.
    </p>
  </>
);

export default NotFoundPage;
