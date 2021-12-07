const path = require('path');
const slugify = require('slugify');

const createTagPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.tsx');
  const singleTagsIndexTemplate = path.resolve('src/templates/singleTagIndex.tsx');

  const postsByTag = {};

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach((tag) => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = [];
        }

        postsByTag[tag].push(node);
      });
    }
  });

  const tags = Object.keys(postsByTag);

  createPage({
    path: '/tags',
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort(),
    },
  });

  tags.forEach((tagName) => {
    const postsWithTag = postsByTag[tagName];

    createPage({
      path: `/tags/${tagName}`,
      component: singleTagsIndexTemplate,
      context: {
        posts: postsWithTag,
        tagName,
      },
    });
  });
};

/**
 * Create blog post pages
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blogPost.tsx');

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              path
            }
            frontmatter {
              title
              tags
              date
            }
          }
        }
      }
    }
  `);

  const posts = result.data.allMarkdownRemark.edges;

  createTagPages(createPage, posts);

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    const { path: postPath } = post.node.fields;

    createPage({
      path: postPath,
      component: blogPostTemplate,
      context: {
        pathSlug: postPath,
        previous,
        next,
      },
    });
  });
};

/**
 * Create blog post paths
 */
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // create post path
    const { title, date } = node.frontmatter;
    const slug = slugify(title, { lower: true });
    const dateRegex = /\d{4}-\d{2}-\d{2}/;
    let postPath = `/${slug}`;
    // If post directory includes date => blog post
    // If not => page
    if (node.fileAbsolutePath.match(dateRegex)) {
      postPath = `/blog/${date}/${slug}`;
    }

    // create slug
    createNodeField({
      name: 'slug',
      node,
      value: slug,
    });

    // create path
    createNodeField({
      name: 'path',
      node,
      value: postPath,
    });
  }
};
