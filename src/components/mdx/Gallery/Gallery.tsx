import React, {
  type ReactNode,
  Children,
  isValidElement,
  type ReactElement,
} from 'react';
import * as styles from './Gallery.module.scss';

const COLUMNS = 4;
const DEFAULT_RATIO = 0.67;

function extractHeightRatio(node: ReactNode): number | null {
  if (!isValidElement(node)) {
    return null;
  }

  const element = node as ReactElement<any>;

  if (
    typeof element.props?.className === 'string' &&
    element.props.className.includes('gatsby-resp-image-background-image') &&
    element.props?.style
  ) {
    const paddingBottom =
      element.props.style.paddingBottom ??
      element.props.style['padding-bottom'];
    if (paddingBottom) {
      return parseFloat(paddingBottom) / 100;
    }
  }

  const children = Children.toArray(element.props?.children ?? []);
  for (const child of children) {
    const result = extractHeightRatio(child);
    if (result !== null) return result;
  }

  return null;
}

const Gallery = ({ children }: { children: ReactNode }) => {
  const items = Children.toArray(children).filter(
    (item) => typeof item !== 'string',
  );

  const columns: ReactNode[][] = Array.from({ length: COLUMNS }, () => []);
  const heights = Array(COLUMNS).fill(0);

  items.forEach((item) => {
    const ratio = extractHeightRatio(item) ?? DEFAULT_RATIO;
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push(item);
    heights[shortest] += ratio;
  });

  const maxHeight = Math.max(...heights);
  const activeColumns = columns
    .map((column, i) => ({ column, height: heights[i] }))
    .filter(({ column }) => column.length > 0);

  return (
    <div className={styles.Gallery} data-testid="gallery">
      <div className={styles.GalleryMobileList}>{items}</div>
      <div className={styles.GalleryGrid} data-testid="gallery-grid">
        {activeColumns.map(({ column, height }, index) => (
          <div
            key={`gallery-column-${column}-${index}`}
            data-testid={
              height < maxHeight ? 'gallery-column-short' : 'gallery-column'
            }
            className={
              height < maxHeight
                ? `${styles.GalleryColumn} ${styles.GalleryColumnShort}`
                : styles.GalleryColumn
            }
          >
            {column}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
