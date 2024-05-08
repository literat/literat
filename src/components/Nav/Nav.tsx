import React, { ReactNode } from 'react';
import * as styles from './Nav.module.scss';

interface NavProps {
  children: ReactNode;
}

export function Nav({ children }: NavProps) {
  return <nav className={styles.Nav}>{children}</nav>;
}
