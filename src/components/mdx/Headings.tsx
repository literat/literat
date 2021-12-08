import React from 'react';
import styled from 'styled-components';

const headingSizes = {
  h1: 6,
  h2: 4,
  h3: 3,
  h4: 2.5,
  h5: 2,
  h6: 1.8,
  span: 3.2,
};

const HStyles = styled.h1`
  /* Default h1 */
  font-size: ${headingSizes.h1}rem;
  /* Default allow to change */
  font-size: ${({ as }) => as && `${headingSizes[as]}rem`};
  /* Visually override if need different font size vs the semantic element */
  font-size: ${({ looksLike }) => looksLike && `${headingSizes[looksLike]}rem`};
  @media (max-width: 450px) {
    font-size: 3rem;
  }

  &:before {
    /* Blue square is using ems so it scales up/down with the font size */
    width: 1em;
    height: 1.5em;
    margin-top: 5px;
    margin-left: -10px;
    content: '';
    pointer-events: none;
    background: var(--blue);
    position: absolute;
    z-index: -1;
    --translate: -0.5rem;
    --rotate: 2deg;
    transform: translateX(var(--translate)) translateY(var(--translate)) skew(-10deg);
    ${({ as }) => as === 'span' && `visibility: hidden;`};
  }
  &:hover:before {
    visibility: visible;
  }
  a {
    color: inherit;
    text-decoration-color: var(--blue);
  }
  .hash-anchor {
    position: absolute;
    transform: translateX(-120%);
    text-decoration: none;
    opacity: 0;
  }
  &:hover .hash-anchor {
    opacity: 1;
  }
`;

export default function H(props) {
  return (
    <HStyles {...props}>
      <span>{props.children}</span>
    </HStyles>
  );
}
