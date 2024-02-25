import { overpassItalic } from '@/ui/fonts';
import clsx from 'clsx';
import styles from './Headings.module.scss';

const headingSizes = {
  h1: 6,
  h2: 4,
  h3: 3,
  h4: 2.5,
  h5: 2,
  h6: 1.8,
  span: 3.6,
};

export default function H(props) {
  const { as: Component = 'h1', looksLike, children, ...rest } = props;

  const fontSize = looksLike ? headingSizes[looksLike] : props.as ? headingSizes[props.as] : headingSizes.h1;

  return (
    <Component
      {...rest}
      className={clsx(styles.headings, overpassItalic.className, { [styles.HeadingsHidden]: props.as === 'span' })}
      style={{ fontSize: `${fontSize}rem` }}
    >
      <span>{children}</span>
    </Component>
  );
}
