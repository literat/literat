import React from 'react';
import styled from 'styled-components';

const HeroImageStyles = styled.div`
  img {
    width: 140%;
    margin-inline: -20%;
  }
`;

function HeroImage({ url }) {
  return (
    <HeroImageStyles>
      <img src={url} />
    </HeroImageStyles>
  );
}

export default HeroImage;
