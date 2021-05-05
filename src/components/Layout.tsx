import React, { ReactNode } from 'react';
import ContentStyles from './styles/ContentStyles';
import ContainerStyles from './styles/ContainerStyles';
import GlobalStyles from './styles/GlobalStyles';
import Fonts from './Fonts';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode | string;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyles />
    <Fonts />
    <ContainerStyles>
      <Header />
      <Nav />
      <ContentStyles>{children}</ContentStyles>
    </ContainerStyles>
    <Footer />
  </>
);

export default Layout;
