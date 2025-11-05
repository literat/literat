import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LangToggle } from '../LangToggle';

describe('LangToggle', () => {
  it('renders EN and CS buttons', () => {
    const toggleLang = jest.fn();
    render(<LangToggle lang="en" toggleLang={toggleLang} />);

    expect(screen.getByRole('button', { name: /EN/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /CS/i })).toBeInTheDocument();
  });

  it('EN button is active (disabled) when lang === "en"', () => {
    const toggleLang = jest.fn();
    render(<LangToggle lang="en" toggleLang={toggleLang} />);

    const enButton = screen.getByRole('button', { name: /EN/i });
    expect(enButton).toBeDisabled();
  });

  it('CS button is active (disabled) when lang === "cs"', () => {
    const toggleLang = jest.fn();
    render(<LangToggle lang="cs" toggleLang={toggleLang} />);

    const csButton = screen.getByRole('button', { name: /CS/i });
    expect(csButton).toBeDisabled();
  });

  it('clicking the inactive button calls toggleLang', () => {
    const toggleLang = jest.fn();
    render(<LangToggle lang="en" toggleLang={toggleLang} />);

    const csButton = screen.getByRole('button', { name: /CS/i });
    fireEvent.click(csButton);

    expect(toggleLang).toHaveBeenCalledTimes(1);
  });

  it('active button does not respond to clicks (disabled)', () => {
    const toggleLang = jest.fn();
    render(<LangToggle lang="en" toggleLang={toggleLang} />);

    const enButton = screen.getByRole('button', { name: /EN/i });
    fireEvent.click(enButton);

    expect(toggleLang).not.toHaveBeenCalled();
  });

  it('renders separator between buttons', () => {
    const toggleLang = jest.fn();
    render(<LangToggle lang="en" toggleLang={toggleLang} />);

    const separator = screen.getByText('|', {
      selector: 'span[aria-hidden="true"]',
    });
    expect(separator).toBeInTheDocument();
  });
});
