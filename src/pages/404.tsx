import React from 'react';
import { Link } from 'gatsby';
import H from '../components/mdx/Headings';
import SiteMetaTags from '../components/SiteMetaTags';

const Head = () => (
  <SiteMetaTags title="Here is not what are you looking for - Literat" />
);

const NotFoundPage = () => (
  <>
    <H>Damn, eh!</H>
    <p>404.</p>
    <p>
      This page doesn't exist. If you think this is an error{' '}
      <Link to="/contact">contact me</Link>.
    </p>
  </>
);

export default NotFoundPage;
export { Head };
