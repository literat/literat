import React, { ReactNode, Ref, forwardRef } from 'react';
import * as styles from './Nav.module.scss';

interface NavListProps {
  children: ReactNode;
}

export const NavList = forwardRef(function NavList({ children }: NavListProps, ref: Ref<HTMLUListElement>) {
  return (
    <ul ref={ref} className={styles.NavList}>
      {children}
    </ul>
  );
});
