import React from 'react';
import { Link } from 'gatsby';
import NavStyles from './NavStyles';

interface NavProps {
  previous: any;
  next: any;
}

const Nav = ({ previous, next }: NavProps) => (
  <NavStyles>
    {previous ? (
      <Link to={previous.node.fields.path}>
        <strong>← Prev</strong>
        <p>{previous.node.frontmatter.title}</p>
      </Link>
    ) : (
      <p />
    )}
    {next ? (
      <Link to={next.node.fields.path}>
        <strong>Next →</strong>
        <p>{next.node.frontmatter.title}</p>
      </Link>
    ) : (
      <p />
    )}
  </NavStyles>
);

export default Nav;
