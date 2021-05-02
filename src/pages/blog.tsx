import React from 'react';
import { graphql, Link } from 'gatsby';

type Edge = {
  node: {
    fields: {
      path: string;
      slug: string;
    }
    frontmatter: {
      title: string;
    };
  };
};

interface BlogProps {
  data: {
    allMarkdownRemark: {
      edges: Edge[];
    };
  };
}

const Blog = ({ data }: BlogProps) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'Signika',
        }}
      >
        {edges.map((edge: Edge) => {
          const { frontmatter, fields } = edge.node;
          const { path, slug } = fields;
          const { title } = frontmatter;

          return (
            <div key={slug} style={{ marginBottom: '1rem' }}>
              <Link to={path}>{title}</Link>
            </div>
          );
        })}
        <div>
          <Link to="/tags">Browse by Tag</Link>
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query BLOG_POSTS {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            path
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;

export default Blog;
