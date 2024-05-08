import { Link } from 'gatsby';
import React from 'react';
import { NavItem } from './NavItem';
import { NavList } from './NavList';
import { NavStyles } from './NavStyles';

const Nav = () => (
  <NavStyles>
    <NavList>
      <NavItem>
        <Link to="/codes">Codes</Link>
      </NavItem>
      <NavItem>
        <Link to="/talks">Talks</Link>
      </NavItem>
      <NavItem>
        <Link to="/uses">Uses</Link>
      </NavItem>
      <NavItem>
        <Link to="/blog">Blog</Link>
      </NavItem>
      <NavItem>
        <Link to="/about">About</Link>
      </NavItem>
      <NavItem>
        <Link to="/contact">Contact</Link>
      </NavItem>
    </NavList>
  </NavStyles>
);

export default Nav;
