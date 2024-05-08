import styled from 'styled-components';

export const NavStyles = styled.nav`
  --rotate: -2deg;
  --scaleX: 1;
  --transform: skew(-20deg) rotate(var(--rotate)) scaleX(var(--scaleX));
  display: grid;
  grid-template-columns: 1fr;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
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
