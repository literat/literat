import React, { ReactNode } from 'react';
import * as styles from './LayoutContainer.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export function LayoutContainer({ children }: LayoutProps) {
  return <div className={styles.LayoutContainer}>{children}</div>;
}
