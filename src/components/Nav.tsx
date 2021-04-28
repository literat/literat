import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  --rotate: -2deg;
  --scaleX: 1;
  --transform: skew(-20deg) rotate(var(--rotate)) scaleX(var(--scaleX));
  display: grid;
  grid-template-columns: 1fr;
  margin-left: 10px;
  margin-right: 10px;
  &:before {
    height: 8px;
    content: '';
    width: 100%;
    background: black;
    bottom: -2px;
    z-index: -1;
    transition: transform 0.1s;
    transform: var(--transform);
  }
  &:after {
    height: 8px;
    content: '';
    width: 100%;
    background: black;
    bottom: -2px;
    z-index: -1;
    transition: transform 0.1s;
    transform: var(--transform);
  }
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
  a {
    font-family: 'Signika';
    font-size: 2.8rem;
    color: black;
    text-decoration: none;
    font-weight: 900;
  }
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
