import styles from './ContentHeader.module.scss';

export default function ContentHeader({ children }) {
  return <header className={styles.callontentHeader}>{children}</header>;
}
