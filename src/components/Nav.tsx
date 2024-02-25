'use client';

import { overpass } from '@/ui/fonts';
import useRowFinder from '@/utils/useRowFinder';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './Nav.module.scss';
import H from './mdx/Headings';

const NavItem = ({ children, row }) => {
  return <li className={clsx(styles.navItem, overpass.className, row >= 2 && styles.NavItemScaleDown)}>{children}</li>;
};

const Nav = () => {
  const { ref, getRow } = useRowFinder();

  return (
  <nav className={styles.nav}>
    <ul className={styles.navList} ref={ref}>
      <NavItem row={getRow(0)}>
        <Link href="/codes">
          <H as="span">Codes</H>
        </Link>
      </NavItem>
      <NavItem row={getRow(1)}>
        <Link href="/talks">
          <H as="span">Talks</H>
        </Link>
      </NavItem>
      <NavItem row={getRow(2)}>
        <Link href="/uses">
          <H as="span">Uses</H>
        </Link>
      </NavItem>
      <NavItem row={getRow(3)}>
        <Link href="/blog">
          <H as="span">Blog</H>
        </Link>
      </NavItem>
      <NavItem row={getRow(4)}>
        <Link href="/about">
          <H as="span">About</H>
        </Link>
      </NavItem>
      <NavItem row={getRow(5)}>
        <Link href="/contact">
          <H as="span">Contact</H>
        </Link>
      </NavItem>
    </ul>
  </nav>
);}

export default Nav;
