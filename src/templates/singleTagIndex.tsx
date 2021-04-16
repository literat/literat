import React from 'react';
import { Link } from 'gatsby';

type Frontmatter = {
  title: string;
  path: string;
};

type Post = {
  frontmatter: Frontmatter;
};

type PageContext = {
  posts: Post[];
  tagName: string;
};

interface SingleTagsTemplateProps {
  pageContext: PageContext;
}

const SingleTagsTemplate = ({ pageContext }: SingleTagsTemplateProps) => {
  const { posts, tagName } = pageContext;

  console.log(pageContext);

  return (
    <div>
      <div>Posts about {`${tagName}`}</div>
      <div>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleTagsTemplate;
