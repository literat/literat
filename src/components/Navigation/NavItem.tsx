import styled from 'styled-components';

export const NavItem = styled.li`
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
    transform: none;

    &:before {
      background: none;
      transform: none;
    }
  }
`;
