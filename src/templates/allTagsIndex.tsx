import React from 'react';
import { Link } from 'gatsby';

interface AllTagsTemplateProps {
  pageContext: {
    tags: string[];
  };
}

const AllTagsTemplate = ({ pageContext }: AllTagsTemplateProps) => {
  const { tags } = pageContext;

  return (
    <div>
      <div>
        <ul>
          {tags.map((tagName: string, index: number) => (
            <li key={index}>
              <Link to={`/tags/${tagName}`}>{tagName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllTagsTemplate;
