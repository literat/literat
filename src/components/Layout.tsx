import React, { ReactNode } from 'react';
import ContentStyles from './styles/ContentStyles';
import GlobalStyles from './styles/GlobalStyles';
import Fonts from './Fonts';

interface LayoutProps {
  children: ReactNode | string;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyles />
    <Fonts />
    <ContentStyles>{children}</ContentStyles>
  </>
);

export default Layout;
