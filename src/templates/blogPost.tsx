import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { EditDialog } from '../components/Content/EditDialog';
import HeroImage from '../components/Content/HeroImage';
import { Nav as ContentNav } from '../components/Content/Nav';
import PostMeta from '../components/Content/PostMeta';
import MetaTags from '../components/MetaTags';
import H from '../components/mdx/Headings';

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
      parent: {
        absolutePath: string;
      };
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

function PostTemplate({ data, scope, pageContext, children }: TemplateProps) {
  const { mdx: post } = data;
  const { title, image, excerpt } = post.frontmatter;
  const { next, previous } = pageContext;
  const editUrl = `https://github.com/literat/literat/tree/master/src/${post.parent.absolutePath.split('/src/')[1]}`;

  return (
    <div>
      <ContentHeaderStyles>
        <MetaTags post={post} />
        <H>{title}</H>
        {excerpt && <p>{excerpt}</p>}
        {image?.publicURL && <HeroImage image={image} title={title} />}
        <PostMeta post={post} editUrl={editUrl} />
      </ContentHeaderStyles>
      {children}
      <footer>
        <EditDialog editUrl={editUrl} />
        <ContentNav previous={previous} next={next} />
      </footer>
    </div>
  );
}

export const query = graphql`
  query ($pathSlug: String!) {
    mdx(fields: { path: { eq: $pathSlug } }) {
      fields {
        path
        readingTime {
          text
        }
      }
      parent {
        ... on File {
          absolutePath
        }
      }
      frontmatter {
        title
        date
        category
        image {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 900)
          }
        }
        excerpt
        tags
      }
    }
  }
`;

export default PostTemplate;
