import useRowFinder from '@/utils/useRowFinder';
import { Link } from 'gatsby';
import React from 'react';
import { Nav, NavItem, NavList } from './Nav';

const Menu = () => {
  const { ref, getRow } = useRowFinder();

  return (
    <Nav>
      <NavList ref={ref}>
        <NavItem row={getRow(0)}>
          <Link to="/codes">Codes</Link>
        </NavItem>
        <NavItem row={getRow(1)}>
          <Link to="/talks">Talks</Link>
        </NavItem>
        <NavItem row={getRow(2)}>
          <Link to="/uses">Uses</Link>
        </NavItem>
        <NavItem row={getRow(3)}>
          <Link to="/blog">Blog</Link>
        </NavItem>
        <NavItem row={getRow(4)}>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem row={getRow(5)}>
          <Link to="/contact">Contact</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Menu;
