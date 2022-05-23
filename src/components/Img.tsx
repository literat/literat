/* eslint react/jsx-props-no-spreading: 0 */
/* eslint jsx-a11y/alt-text: 0 */

import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

interface ImgProps {
  image: {
    extension: string;
    publicURL: string;
    childImageSharp: {
      fluid: boolean;
    };
  };
  [string]: any;
}

const Img = ({ image, ...rest }: ImgProps) => {
  if (!image) {
    return null;
  }

  return image.extension === 'gif' ? (
    <img src={image.publicURL} {...rest} />
  ) : (
    <GatsbyImage fluid={image.childImageSharp.gatsbyImageData} {...rest} />
  );
};

export default Img;
