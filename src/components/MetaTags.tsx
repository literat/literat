import React from 'react';
import { Helmet } from 'react-helmet';
import { pathJoin } from '../utils/pathJoin';

function getBaseURL() {
  const url = process.env.URL;
  if (!url || url === 'undefined') {
    return `http://localhost:8000`;
  }

  return url;
}

const baseURL = getBaseURL();

function MetaTags({ post }) {
  const canonical = pathJoin('https://literat.dev', post.fields.path);
  const url = pathJoin(baseURL, post.fields.path);
  const thumbnailData = {
    title: post.frontmatter.title,
    url,
    thumbnail: post.frontmatter.image?.publicURL,
  };
  const thumbnailQuery = new URLSearchParams(
    Object.fromEntries(Object.entries(thumbnailData).filter(([key, val]) => val !== undefined)),
  ).toString();

  const ogImage = `${baseURL}/.netlify/functions/social-image?${thumbnailQuery}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <meta name="generator" content="Literat on Gatsby!" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tomaslitera" />
      <meta name="twitter:creator" content="@tomaslitera" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={post.frontmatter.title} />
      <meta name="twitter:description" content={post.excerpt} />
      <meta name="twitter:image" content={ogImage} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.frontmatter.title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={post.excerpt} />
      {post.frontmatter.date ? (
        <meta property="article:published_time" content={new Date(post.frontmatter.date.toString()).toISOString()} />
      ) : null}

      <meta property="og:site_name" content="Literat" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <title>{post.frontmatter.title} - Literat</title>
    </Helmet>
  );
}

export default MetaTags;
