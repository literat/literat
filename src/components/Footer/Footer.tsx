import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import * as styles from './Footer.module.scss';

const Footer = (): JSX.Element => (
  <footer className={styles.Footer}>
    <div>
      <div className={styles.bottom}>
        I code on{' '}
        <a
          href="https://github.com/literat"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.socialLink}
        >
          <IoLogoGithub /> GitHub
        </a>
        <p suppressHydrationWarning>
          Literat &copy; 2008 — {new Date().getFullYear()}
        </p>
        <p>
          <a
            className={styles.licenseLink}
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            target="_blank"
            rel="license noreferrer noopener"
          >
            <strong>Creative Commons CC BY-NC 4.0</strong>
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
