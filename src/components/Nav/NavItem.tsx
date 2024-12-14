import clsx from 'clsx';
import React, { ReactNode } from 'react';
import * as styles from './Nav.module.scss';

interface NavItemProps {
  children: ReactNode;
  row: number;
}

export function NavItem({ children, row }: NavItemProps) {
  return (
    <li className={clsx(styles.NavItem, row >= 2 && styles.NavItemScaleDown)}>
      {children}
    </li>
  );
}
