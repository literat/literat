import React from 'react';
import ContentStyles from './styles/ContentStyles';
import GlobalStyles from "./styles/GlobalStyles"
import Fonts from "./Fonts"

const Layout = ({children}) => (
  <>
    <GlobalStyles />
    <Fonts />
    <ContentStyles>
      {children}
    </ContentStyles>
  </>
);

export default Layout;
