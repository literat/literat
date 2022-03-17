import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--imGoingToFaint);
  grid-template-rows: auto auto;
  margin: 4rem 0;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  a {
    display: grid;
    grid-template-rows: auto 1fr;
    transform: skew(-10deg);

    &:only-child {
      grid-column: 1 / -1;
      text-align: right;
    }

    &:nth-child(1) {
      border-right: 2px solid var(--blue);
    }

    &:nth-child(2) {
      text-align: right;
      border-left: 2px solid var(--blue);
    }
  }

  a,
  a:-webkit-any-link {
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  strong {
    text-decoration: underline;
    text-decoration-color: var(--blue);
    margin-right: 15px;
    margin-left: -15px;
  }

  p,
  strong {
    padding: 1rem 3rem;
    transform: skew(10deg);
  }
`;

export default NavStyles;
