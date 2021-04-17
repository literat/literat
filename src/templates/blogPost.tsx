import React from 'react';
import { graphql, Link } from 'gatsby';

interface TemplateProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
      };
    };
  };
  pageContext: {
    next: {
      frontmatter: {
        path: string;
      };
    };
    previous: {
      frontmatter: {
        path: string;
      };
    };
  };
}

const Template = ({ data, pageContext }: TemplateProps) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  const { title } = markdownRemark.frontmatter;
  const { next, previous } = pageContext;

  return (
    <div>
      <h1 style={{ fontFamily: 'Signika' }}>{title}</h1>
      <div
        className="blogpost"
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ fontFamily: 'Fira Code' }}
      />
      <div style={{ marginBottom: '1rem', fontFamily: 'Fira Sans' }}>
        {next && <Link to={next.frontmatter.path}>Next</Link>}
      </div>
      <div style={{ fontFamily: 'Fira Sans' }}>
        {previous && <Link to={previous.frontmatter.path}>Previous</Link>}
      </div>
    </div>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
