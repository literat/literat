import { MDXProvider } from '@mdx-js/react';
import 'normalize.css';
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import Fonts from './Fonts';
import Footer from './Footer';
import Header from './Header';
import Nav from './Navigation/Nav';
import mdxComponents from './mdx';
import ContainerStyles from './styles/ContainerStyles';
import ContentStyles from './styles/ContentStyles';
import GlobalStyles from './styles/GlobalStyles';

interface LayoutProps {
  title: string;
  children: ReactNode | string;
}

const Layout = ({ title, pageContext, children }: LayoutProps) =>
  pageContext.layout === 'thumbnail' ? (
    children
  ) : (
    <>
      <GlobalStyles />
      <Fonts />
      <Helmet>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Helmet>
      <ContainerStyles>
        <Header />
        <Nav />
        <MDXProvider components={mdxComponents}>
          <ContentStyles className={pageContext.layoutClasses}>{children}</ContentStyles>
        </MDXProvider>
      </ContainerStyles>
      <Footer />
    </>
  );

export default Layout;
