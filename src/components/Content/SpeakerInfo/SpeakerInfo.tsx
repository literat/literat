import React, { ReactNode } from 'react';
import * as styles from './SpeakerInfo.module.scss';

interface SpeakerInfoProps {
  children: ReactNode;
}

export function SpeakerInfo({ children }: SpeakerInfoProps) {
  return <dl className={styles.SpeakerInfo}>{children}</dl>;
}
