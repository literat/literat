import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Gallery from '../Gallery';

// Mirrors the HTML structure gatsby-remark-images generates, including the
// nested span that carries padding-bottom as the aspect-ratio hint.
function makeImage(paddingBottom: string, key: string) {
  return (
    <p key={key}>
      <span className="gatsby-resp-image-wrapper">
        <span
          className="gatsby-resp-image-background-image"
          style={{ paddingBottom }}
        />
        <img className="gatsby-resp-image-image" alt={key} src="test.jpg" />
      </span>
    </p>
  );
}

function makeImages(count: number, paddingBottom = '66.67%') {
  return Array.from({ length: count }, (_, index) =>
    makeImage(paddingBottom, `img${index}`),
  );
}

describe('Gallery', () => {
  it('renders images', () => {
    render(<Gallery>{makeImage('66.67%', 'img0')}</Gallery>);
    // Image renders in both the mobile list and the desktop grid
    expect(screen.getAllByRole('img', { name: 'img0' })).toHaveLength(2);
  });

  it('renders only non-empty columns', () => {
    render(<Gallery>{makeImages(6)}</Gallery>);
    // 6 images distributed into 4 columns — all 4 receive at least one item
    expect(screen.getByTestId('gallery-grid').children).toHaveLength(4);
  });

  it('renders fewer columns when items are fewer than COLUMNS', () => {
    render(<Gallery>{makeImages(3)}</Gallery>);
    expect(screen.getByTestId('gallery-grid').children).toHaveLength(3);
  });

  it('filters out string children', () => {
    render(
      <Gallery>
        {'\n'}
        {makeImage('66.67%', 'a')}
        {'\n'}
        {makeImage('66.67%', 'b')}
      </Gallery>,
    );
    // Scope to the grid to avoid counting the mobile-list duplicate
    expect(
      within(screen.getByTestId('gallery-grid')).getAllByRole('img'),
    ).toHaveLength(2);
  });

  it('renders all images — none are dropped', () => {
    render(<Gallery>{makeImages(14)}</Gallery>);
    // Scope to the grid to avoid counting the mobile-list duplicate
    expect(
      within(screen.getByTestId('gallery-grid')).getAllByRole('img'),
    ).toHaveLength(14);
  });

  it('marks shorter columns with gallery-column-short testid', () => {
    // 14 uniform images → 4+4+3+3 distribution, two columns end up shorter in height
    render(<Gallery>{makeImages(14, '133.333%')}</Gallery>);
    expect(screen.getAllByTestId('gallery-column-short')).toHaveLength(2);
  });

  it('marks no column as short when items divide evenly across 4 columns', () => {
    render(<Gallery>{makeImages(8)}</Gallery>);
    expect(screen.queryAllByTestId('gallery-column-short')).toHaveLength(0);
    expect(screen.getAllByTestId('gallery-column')).toHaveLength(4);
  });

  it('renders empty gallery without crashing', () => {
    render(<Gallery>{''}</Gallery>);
    expect(screen.getByTestId('gallery-grid')).toBeInTheDocument();
  });

  it('uses shortest-column: a tall image limits its column item count', () => {
    // One very tall image (200%) followed by 4 short ones (50%).
    // The tall image fills col0; the short images prefer the remaining shorter columns,
    // so col0 ends up with fewer items than at least one other column.
    const kids = [
      makeImage('200%', 'tall'),
      makeImage('50%', 'a'),
      makeImage('50%', 'b'),
      makeImage('50%', 'c'),
      makeImage('50%', 'd'),
    ];
    render(<Gallery>{kids}</Gallery>);
    const grid = screen.getByTestId('gallery-grid');
    const counts = [...grid.children].map(
      (col) => within(col as HTMLElement).getAllByRole('img').length,
    );
    expect(Math.max(...counts)).toBeGreaterThan(Math.min(...counts));
  });

  it('falls back to default ratio when no padding-bottom is found', () => {
    // Plain divs have no gatsby structure; extractHeightRatio returns null
    // and DEFAULT_RATIO is used for distribution.
    render(
      <Gallery>
        <div key="a">no ratio</div>
        <div key="b">no ratio</div>
        <div key="c">no ratio</div>
      </Gallery>,
    );
    // 3 items → 3 non-empty columns
    expect(screen.getByTestId('gallery-grid').children).toHaveLength(3);
  });
});
