import React from 'react';
import Code from './Code';
import H from './Headings';
import Pre from './Pre';
import T from './Tags';
// import Text from './text';
// import Blockquote from './blockquote';
// import Table from './table';

/* eslint-disable */
export default {
  h1: (props) => <H as="h1" {...props} />,
  h2: (props) => <H as="h2" {...props} />,
  h3: (props) => <H as="h3" {...props} />,
  h4: (props) => <H as="h4" {...props} />,
  h5: (props) => <H as="h5" {...props} />,
  h6: (props) => <H as="h6" {...props} />,
  t: (props) => <T {...props} />,
  // p: props => <Text {...props} />,
  code: (props) => <Code {...props} />,
  pre: (props) => <Pre {...props} />,
  // table: Table,
  // blockquote: Blockquote,
  // TODO add `a`
  // TODO add `img`
  // TODO add `ul`
  // TODO add `li`
};
