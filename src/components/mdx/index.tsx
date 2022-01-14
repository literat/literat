import React from 'react';
import H from './Headings';
import T from './Tags';
// import Heading from "../heading";
// import Text from './text';
// import Code from './code';
// import Blockquote from './blockquote';
// import Table from './table';
// import Pre from './pre';

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
  // pre: Pre,
  // inlineCode: props => <Code {...props} />,
  // table: Table,
  // blockquote: Blockquote,
  // TODO add `a`
  // TODO add `img`
  // TODO add `ul`
  // TODO add `li`
};
