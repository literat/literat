import { graphql, Link } from 'gatsby';
import React from 'react';
import SiteMetaTags from '../components/SiteMetaTags';

const Head = () => <SiteMetaTags title="Blog - Literat" />;

const query = graphql`
  query BLOG_POSTS {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'Overpass',
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

export default Blog;
export { Head, query };
