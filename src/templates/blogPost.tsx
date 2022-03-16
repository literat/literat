import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import ContentNav from '../components/ContentNav';
import H from '../components/mdx/Headings';

interface PageNav {
  fields: {
    path: string;
  };
}

interface TemplateProps {
  data: {
    mdx: {
      body: string;
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
  const { mdx } = data;
  const { body } = mdx;
  const { title } = mdx.frontmatter;
  const { next, previous } = pageContext;

  return (
    <div>
      <H>{title}</H>
      <MDXRenderer>{body}</MDXRenderer>
      <ContentNav previous={previous} next={next} />
    </div>
  );
};

export const query = graphql`
  query ($pathSlug: String!) {
    mdx(fields: { path: { eq: $pathSlug } }) {
      body
      fields {
        path
      }
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
