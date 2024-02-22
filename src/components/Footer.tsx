import { IoLogoGithub } from 'react-icons/io';
import styles from './Footer.module.scss';

const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <div>
      <div className={styles.bottom}>
        I code on{' '}
        <a href="https://github.com/literat" target="_blank" rel="noreferrer noopener" className={styles.socialLink}>
          <IoLogoGithub /> GitHub
        </a>
        <p>Literat &copy; 2008 — {new Date().getFullYear()}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
