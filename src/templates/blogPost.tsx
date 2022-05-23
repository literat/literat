import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import { EditDialog } from '../components/Content/EditDialog';
import { Nav as ContentNav } from '../components/Content/Nav';
import PostMeta from '../components/Content/PostMeta';
import H from '../components/mdx/Headings';
import MetaTags from '../components/MetaTags';
import HeroImage from '../components/Content/HeroImage';

const ContentHeaderStyles = styled.header`
  h1 {
    margin-bottom: 0.5rem;
  }

  div {
    margin-bottom: 3rem;
  }
`;

interface PageNav {
  fields: {
    path: string;
  };
}

interface TemplateProps {
  data: {
    mdx: {
      body: string;
      fileAbsolutePath: string;
      frontmatter: {
        title: string;
      };
    };
  };
  pageContext: {
    next: PageNav;
    previous: PageNav;
  };
}

const Template = ({ data, pageContext }: TemplateProps) => {
  const { mdx: post } = data;
  const { body } = post;
  const { title, image, excerpt } = post.frontmatter;
  const { next, previous } = pageContext;
  const editUrl = `https://github.com/literat/literat/tree/master/src/${post.fileAbsolutePath.split('/src/')[1]}`;

  return (
    <div>
      <ContentHeaderStyles>
        <MetaTags post={post} />
        <H>{title}</H>
        {excerpt && <p>{excerpt}</p>}
        {image?.publicURL && <HeroImage url={image?.publicURL} />}
        <PostMeta post={post} editUrl={editUrl} />
      </ContentHeaderStyles>
      <MDXRenderer>{body}</MDXRenderer>
      <footer>
        <EditDialog editUrl={editUrl} />
        <ContentNav previous={previous} next={next} />
      </footer>
    </div>
  );
};

export const query = graphql`
  query ($pathSlug: String!) {
    mdx(fields: { path: { eq: $pathSlug } }) {
      body
      fields {
        path
        readingTime {
          text
        }
      }
      fileAbsolutePath
      frontmatter {
        title
        date
        category
        image {
          publicURL
        }
        excerpt
      }
    }
  }
`;

export default Template;
