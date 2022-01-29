import React from 'react';
import { render, screen } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';

import HomePage from '../index';

describe('Home Page', () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it('should render title', () => {
    expect(screen.getByText(/Literat/)).toHaveTextContent('Hi, I am Literat.');
  });

  it('should render description', () => {
    expect(screen.getByText(/Fullstack/)).toHaveTextContent('The Fullstack Developer from Czech republic 🇨🇿');
  });
});
