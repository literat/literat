import React, { type ReactNode } from 'react';

interface SiteMetaTagsProps {
  children?: ReactNode;
  title: string;
}

function SiteMetaTags({ children, title }: SiteMetaTagsProps) {
  return (
    <>
      <html lang="en" />
      {/**
       * The `id` attributes help with deduplication of tags in the head.
       *
       * @see {@link https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/#deduplication}
       */}
      <title id="meta-title">{title}</title>
      <link
        id="favicon-icon"
        rel="icon"
        href="/favicon.ico"
        type="image/x-icon"
      />
      <link
        id="favicon-svg"
        rel="shortcut icon"
        href="/favicon.svg"
        type="image/svg+xml"
      />
      <link
        id="favicon-png"
        rel="shortcut icon"
        href="/favicon.png"
        type="image/png"
      />
      {children}
    </>
  );
}

export default SiteMetaTags;
