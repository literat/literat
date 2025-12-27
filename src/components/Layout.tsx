import { MDXProvider } from '@mdx-js/react';
import 'normalize.css';
import React, { ReactNode } from 'react';
import Fonts from './Fonts';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import mdxComponents from './mdx';
import ContainerStyles from './styles/ContainerStyles';
import ContentStyles from './styles/ContentStyles';
import GlobalStyles from './styles/GlobalStyles';
import SiteMetaTags from './SiteMetaTags';

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
      <SiteMetaTags title={title} />
      <ContainerStyles>
        <Header />
        <Menu />
        <MDXProvider components={mdxComponents}>
          <ContentStyles className={pageContext.layoutClasses}>
            {children}
          </ContentStyles>
        </MDXProvider>
      </ContainerStyles>
      <Footer />
    </>
  );

export default Layout;
