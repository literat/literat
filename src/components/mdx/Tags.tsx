import React from 'react';
import styled from 'styled-components';

const TagContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding-left: 0.5rem;
`;

const TagStyles = styled.div`
  font-size: 1.4rem;
  /* Blue square is using ems so it scales up/down with the font size */
  margin: 0 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background: var(--imGoingToFaint);
  display: inline-block;
  vertical-align: text-top;
  border-left: 2px solid var(--blue);
  --translate: -0.5rem;
  --rotate: 2deg;
  transform: translateX(var(--translate)) translateY(var(--translate))
    skew(-10deg);
  ${({ as }) => as === 'span' && `visibility: hidden;`};

  &:hover {
    background-color: var(--blue);
  }

  span {
    margin: 0 0.5rem 0 0.5rem;
  }
`;

export default function T(props) {
  return (
    <TagContainer>
      {props.children.split(',').map((tag, i) => (
        <TagStyles {...props} key={i}>
          <span>{tag}</span>
        </TagStyles>
      ))}
    </TagContainer>
  );
}
