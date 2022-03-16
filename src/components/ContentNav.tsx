import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ContentNavStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--imGoingToFaint);

  --translate: -0.5rem;
  --rotate: 2deg;
  transform: translateX(var(--translate)) translateY(var(--translate)) skew(-10deg);

  grid-template-rows: auto auto;
  border-right: 2px solid var(--blue);
  border-left: 2px solid var(--blue);
  margin: 4rem 0;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }


  a {
    display: grid;
    grid-template-rows: auto 1fr;
    text-decoration: none;

    &:only-child {
      grid-column: 1 / -1;
      text-align: right;
    }

    &:nth-child(2) {
      text-align: right;
      border-left: 2px solid var(--blue); */
    }

    &:hover:nth-child(1),
    &:hover:nth-child(2) {
      background-color: var(--blue);
    }
  }

  p {
    margin: 0;
  }

  strong {
    text-decoration: underline;
    text-decoration-color: var(--yellow);
  }

  p,
  strong {
    padding: 1rem 3rem;
  }
`;

interface ContentNavProps {
  previous: any;
  next: any;
}

const ContentNav = ({ previous, next }: ContentNavProps) => (
  <ContentNavStyles>
    {previous && (
      <Link to={previous.node.fields.path}>
        <strong>← Prev</strong>
        <p>{previous.node.frontmatter.title}</p>
      </Link>
    )}
    {next && (
      <Link to={next.node.fields.path}>
        <strong>Next →</strong>
        <p>{next.node.frontmatter.title}</p>
      </Link>
    )}
  </ContentNavStyles>
);

export default ContentNav;
