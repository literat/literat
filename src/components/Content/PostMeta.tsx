import React from 'react';
import styled from 'styled-components';
import EditOnGitHub from '../EditOnGitHub';

const PostMetaStyles = styled.div`
  font-family: Overpass Mono, monospace;
  font-size: 1.6rem;
  font-style: italic;
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  justify-content: start;
  & > * {
    :not(:last-child):after {
      content: '//';
      margin-left: 1rem;
      color: var(--blue);
      font-weight: 600;
      font-style: normal;
    }
  }
`;

interface PostMetaProps {
  post: {
    fields: {
      readingTime: {
        text: string;
      };
    };
    frontmatter: {
      date: string;
      category: string[];
    };
  };
}

function PostMeta({ post, editUrl }: PostMetaProps) {
  const { date, category } = post.frontmatter;
  const { readingTime } = post.fields;
  const formattedDate = new Date(date).toLocaleDateString('cs-CZ');

  return (
    <PostMetaStyles>
      <time dateTime={formattedDate}>{formattedDate}</time>
      {category && <span>{category.join(', ')}</span>}
      <span>{readingTime.text}</span>
      <EditOnGitHub editUrl={editUrl} />
    </PostMetaStyles>
  );
}

export default PostMeta;
