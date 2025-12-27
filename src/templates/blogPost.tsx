import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { EditDialog } from '../components/Content/EditDialog';
import HeroImage from '../components/Content/HeroImage';
import { Nav as ContentNav } from '../components/Content/Nav';
import PostMeta from '../components/Content/PostMeta';
import PostMetaTags from '../components/PostMetaTags';
import H from '../components/mdx/Headings';

const query = graphql`
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

interface PostTemplateProps {
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

const Head = ({ data }: PostTemplateProps) => {
  const { mdx: post } = data;

  return <PostMetaTags post={post} />;
};

function PostTemplate({
  data,
  scope,
  pageContext,
  children,
}: PostTemplateProps) {
  const { mdx: post } = data;
  const { title, image, excerpt } = post.frontmatter;
  const { next, previous } = pageContext;
  const editUrl = `https://github.com/literat/literat/tree/master/src/${post.parent.absolutePath.split('/src/')[1]}`;

  return (
    <div>
      <ContentHeaderStyles>
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

export default PostTemplate;
export { query, Head };
