import React, { Fragment, ReactNode } from 'react';

interface SpeakerInfoItemProps {
  children: ReactNode;
  label: string;
}

export function SpeakerInfoItem({ children, label }: SpeakerInfoItemProps) {
  return (
    <Fragment>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </Fragment>
  );
}
