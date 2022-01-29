import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';

import BlogIndex from '../blog';

describe('Blog Index', () => {
  beforeEach(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: `Gatsby Starter Blog`,
          description: `A starter blog demonstrating what Gatsby can do.`,
        },
      },
    });
  });

  it('should have post title', async () => {
    const mockData = {
      site: {
        siteMetadata: {
          author: 'John Doe',
        },
      },
      allMdx: {
        edges: [
          {
            node: {
              excerpt: 'This is my first excerpt',
              fields: {
                slug: 'first-slug',
                path: 'first-path',
              },
              frontmatter: {
                date: 'Nov 11, 2020',
                title: 'My awesome first blog post',
                description: 'My awesome first blog description',
              },
            },
          },
          {
            node: {
              excerpt: 'This is my second excerpt',
              fields: {
                slug: 'second-slug',
                path: 'second-path',
              },
              frontmatter: {
                date: 'Nov 12, 2020',
                title: 'My awesome second blog post',
                description: 'My awesome second blog description',
              },
            },
          },
        ],
      },
    };

    const { getByTestId } = render(<BlogIndex data={mockData} />);

    const { edges } = mockData.allMdx;
    const post1 = 'first-slug-link';

    expect(getByTestId(post1)).toHaveTextContent(edges[0].node.frontmatter.title);
  });
});
