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
  span: 3.2,
};

export default function H(props) {
  const { as: Component = 'h1', looksLike, children, ...rest} = props;

  const fontSize = looksLike ? headingSizes[looksLike] : props.as ? headingSizes[props.as] : headingSizes.h1;
  const before = {
    '&::before': {
      visibility: props.as === 'span' ? 'hidden' : undefined,
    }
  };

  return (
    <Component {...rest} className={clsx(styles.headings, overpassItalic.className, before)} style={{ fontSize: `${fontSize}rem` }} >
      <span>{children}</span>
    </Component>
  );
}
