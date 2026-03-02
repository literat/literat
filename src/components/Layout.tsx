import { MDXProvider } from '@mdx-js/react';
import 'normalize.css';
import React, { ReactNode } from 'react';
import Fonts from './Fonts';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import mdxComponents from './mdx';
import ContentStyles from './styles/ContentStyles';
import GlobalStyles from './styles/GlobalStyles';
import { MainContainer, LayoutContainer } from './Container';

interface LayoutProps {
  children: ReactNode | string;
  pageContext?: {
    layout?: string;
    layoutClasses?: string;
  };
}

const Layout = ({ pageContext, children }: LayoutProps) =>
  pageContext?.layout === 'thumbnail' ? (
    children
  ) : (
    <>
      <GlobalStyles />
      <Fonts />
      <LayoutContainer>
        <MainContainer>
          <Header />
          <Menu />
          <MDXProvider components={mdxComponents}>
            <ContentStyles className={pageContext?.layoutClasses}>
              {children}
            </ContentStyles>
          </MDXProvider>
        </MainContainer>
        <Footer />
      </LayoutContainer>
    </>
  );

export default Layout;
