import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';

type Edge = {
  node: {
    fields: {
      path: string;
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
};

interface BlogProps {
  data: {
    allMdx: {
      edges: Edge[];
    };
  };
}

const Blog = ({ data }: BlogProps) => {
  const { edges } = data.allMdx;

  return (
    <div>
      <Helmet>
        <title>Blog - Literat</title>
      </Helmet>
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
              <Link data-testid={`${slug}-link`} to={path}>
                {title}
              </Link>
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
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
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
