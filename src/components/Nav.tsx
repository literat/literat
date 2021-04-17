import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  border-bottom: 5px solid black;
  display: grid;
  grid-template-columns: 1fr;
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 3rem 2rem 2rem 2rem;
`;

const NavItem = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  align-content: center;
  grid-gap: 2rem;
  margin: 1rem;
`;

const Nav = () => (
  <NavStyles>
    <NavList>
      <NavItem>
        <Link to="/">Homepage</Link>
      </NavItem>
      <NavItem>
        <Link to="/blog">Blog</Link>
      </NavItem>
    </NavList>
  </NavStyles>
);

export default Nav;
