import React, { ReactNode } from 'react';
import ContentStyles from './styles/ContentStyles';
import GlobalStyles from './styles/GlobalStyles';
import Fonts from './Fonts';
import Header from './Header';
import Nav from './Nav';

interface LayoutProps {
  children: ReactNode | string;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyles />
    <Fonts />
    <Header />
    <Nav />
    <ContentStyles>{children}</ContentStyles>
  </>
);

export default Layout;
