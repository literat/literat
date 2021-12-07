import React from 'react';
import { graphql, Link } from 'gatsby';

interface PageNav {
  fields: {
    path: string;
  };
}

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
    next: PageNav;
    previous: PageNav;
  };
}

const Template = ({ data, pageContext }: TemplateProps) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  const { title } = markdownRemark.frontmatter;
  const { next, previous } = pageContext;

  return (
    <div>
      <h1>{title}</h1>
      <div
        className="blogpost"
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ fontFamily: 'Fira Code' }}
      />
      <div style={{ marginBottom: '1rem', fontFamily: 'Fira Sans' }}>
        {next && <Link to={next.fields.path}>Next</Link>}
      </div>
      <div style={{ fontFamily: 'Fira Sans' }}>
        {previous && <Link to={previous.fields.path}>Previous</Link>}
      </div>
    </div>
  );
};

export const query = graphql`
  query ($pathSlug: String!) {
    markdownRemark(fields: { path: { eq: $pathSlug } }) {
      html
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
