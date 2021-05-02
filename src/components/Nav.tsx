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
  transform: skew(-20deg) rotate(-2deg) scaleX(1);
`;

const NavItem = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  align-content: center;
  grid-gap: 2rem;
  margin: 1rem;
  transform: skew(20deg) rotate(2deg) scaleX(1);

  &:after {
    content: '⧹';
    display: block;
    color: var(--dark);
    font-size: 3.8rem;
    font-family: 'Overpass';
  }
  &:last-child:after {
    display: none;
  }

  a {
    font-family: 'Overpass';
    font-size: 3.6rem;
    color: black;
    text-decoration: none;
    font-weight: 900;
  }
`;

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
