import React, { ReactNode } from 'react';
import * as styles from './MainContainer.module.scss';

interface MainContainerProps {
  children: ReactNode;
}

export function MainContainer({ children }: MainContainerProps) {
  return <div className={styles.MainContainer}>{children}</div>;
}
