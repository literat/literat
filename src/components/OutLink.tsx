import React, { Node } from 'react';

interface OutLinkProps {
  link: string;
  children: string | Node;
  [string]: any;
}

const OutLink = ({ link, children, ...rest }: OutLinkProps): JSX.Element => (
  <a href={link} title={rest.title} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default OutLink;
