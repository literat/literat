import React from 'react';
import styled from 'styled-components';
import Img from '../Img';

const HeroImageStyles = styled.div`
  * {
    width: 140%;
    margin-inline: -20%;
    max-height: 630px;
  }
`;
function HeroImage({ image, title }) {
  console.log(image);
  return (
    <HeroImageStyles>
      <Img image={image} alt={title} />
    </HeroImageStyles>
  );
}

export default HeroImage;
