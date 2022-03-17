import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Nav as ContentNav } from '../components/Content/Nav';
import H from '../components/mdx/Headings';
import { EditDialog } from '../components/Content/EditDialog';

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
  const { title } = post.frontmatter;
  const { next, previous } = pageContext;

  const editUrl = `https://github.com/literat/literat/tree/master/src/${post.fileAbsolutePath.split('/src/')[1]}`;

  return (
    <div>
      <H>{title}</H>
      <MDXRenderer>{body}</MDXRenderer>
      <EditDialog editUrl={editUrl} />
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
      fileAbsolutePath
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
