import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import H from '../components/mdx/Headings';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>Here is not what are you looking for - Literat</title>
    </Helmet>
    <H>Damn, eh!</H>
    <p>404.</p>
    <p>
      This page doesn't exist. If you think this is an error <Link to="/contact">contact me</Link>.
    </p>
  </>
);

export default NotFoundPage;
