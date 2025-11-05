import React, { ReactNode } from 'react';
import * as styles from './SpeakerInfoHeading.module.scss';

interface SpeakerInfoHeadingProps {
  children: ReactNode;
}

export function SpeakerInfoHeading({ children }: SpeakerInfoHeadingProps) {
  return <div className={styles.SpeakerInfoHeading}>{children}</div>;
}
