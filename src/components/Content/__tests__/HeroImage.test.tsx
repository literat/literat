import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from '../HeroImage';

describe('HeroImage', () => {
  it('should render', () => {
    const image = {
      childImageSharp: {
        gatsbyImageData: {
          images: {
            fallback: {
              src: 'https://via.placeholder.com/900x600',
            },
          },
        },
      },
    };
    const title = 'test title';
    const dom = render(<HeroImage image={image} title={title} />);

    expect(dom.container.querySelector('img')).toMatchSnapshot();
  });
});
