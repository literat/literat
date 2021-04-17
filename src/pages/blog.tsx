import React from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout';

type Edge = {
  node: {
    frontmatter: {
      path: string;
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
    <Layout>
      <div>
        <Header />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'Signika',
          }}
        >
          {edges.map((edge: Edge) => {
            const { frontmatter } = edge.node;

            return (
              <div key={frontmatter.path} style={{ marginBottom: '1rem' }}>
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </div>
            );
          })}
          <div>
            <Link to="/tags">Browse by Tag</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BLOG_POSTS {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

export default Blog;
