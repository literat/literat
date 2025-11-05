import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import * as styles from './LangButton.module.scss';

interface LangButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

export const LangButton = forwardRef<HTMLButtonElement, LangButtonProps>(
  ({ isActive, ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(styles.LangButton, { [styles.active]: isActive })}
      {...props}
    />
  ),
);
