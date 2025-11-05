import React from 'react';
import { Link } from 'gatsby';
import PageMetaTags from '../../components/PageMetaTags';
import H from '../../components/mdx/Headings';

const TalksPage = () => (
  <>
    <H>Speaking and training</H>
    <p>
      <Link to="/talks/giving">Speaker Info</Link>
    </p>
  </>
);

export default TalksPage;

export const Head = () => (
  <PageMetaTags title="Speaking & Training - Literat" />
);
