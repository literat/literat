import React from 'react';
import { pathJoin } from '../utils/pathJoin';
import { getBaseUrl } from '../utils/getBaseUrl';

const baseURL = getBaseUrl();

function PostMetaTags({ post }) {
  const { title, description, image, excerpt, date, tags } = post.frontmatter;
  const url = pathJoin(baseURL, post.fields.path);
  const thumbnailData = {
    title,
    url,
    thumbnail: image?.publicURL,
  };
  const thumbnailQuery = new URLSearchParams(
    Object.fromEntries(
      Object.entries(thumbnailData).filter(([key, val]) => val !== undefined),
    ),
  ).toString();

  const ogImage = `${baseURL}/.netlify/functions/social-image?${thumbnailQuery}`;

  return (
    <>
      <link rel="canonical" href={url} />
      <meta name="generator" content="Literat on Gatsby!" />
      <meta name="author" content="Literat" />
      <meta name="image" content={ogImage} />
      <meta name="description" content={excerpt} />
      <meta name="keywords" content={tags} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tomaslitera" />
      <meta name="twitter:creator" content="@tomaslitera" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={excerpt} />
      <meta name="twitter:image" content={ogImage} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={excerpt} />
      {date ? (
        <meta
          property="article:published_time"
          content={new Date(date.toString()).toISOString()}
        />
      ) : null}
      <meta property="article:author" content="Literat" />
      <meta property="og:site_name" content="Literat" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <title>{title} - Literat</title>
    </>
  );
}

export default PostMetaTags;
