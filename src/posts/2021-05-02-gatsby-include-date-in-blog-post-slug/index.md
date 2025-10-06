---
title: 'GatsbyJS - How to include date in blog post url'
date: '2021-05-02'
category:
  - Development
tags: ['gatsby', 'gatsbyjs', 'slug', 'url', 'blog', 'post', 'javascript']
excerpt: 'How to setup Gatsby to use post date in post url'
---

When I was developing my new site using [Gatsby JS][gatsby] I wanted to
customize the blog post URL based on folder structure and folder names. And of
course based on other fields in my Markdown files. In my case I wanted all blog
posts URLs in the following format `/blog/yyyy-mm-dd/blog-post-title`. There are
few ways to do this:

1. using for example `slug` field in the Markdown file and enter the full slug
2. Use the `onCreateNode()` function which is used in the `gatsby-node.js` file
   to dynamically generate the slug/url.

I tried both ways and finally I ended with the second option which gave me more
flexibility to modify the final blog structure in one place. Because you do not
want to update all slug fields in all Markdown files in the future if there will
be some reason to do so. It should be so much time-consuming depending on how
many Markdown files/blog posts you have.

## Using `onCreateNode()` function

This function is called whenever a node is created or updated which makes it the
most ideal place to add the functionality we want to perform. It is in the
`gatsby-node.js` file.

What we want to do here is to retrieve `title` and `date` fields from
frontmatter nodes. `title` is then slugified. After that we want to check if the
node is really the blog post (because I use blog template also for a few pages)
and the path should begin with `/blog`. Finally by using the condition we
concatenate our path and create node fields using `createNodeField()`.

```js
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
    if (node.parent.absolutePath.match(dateRegex)) {
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
```

After all these changes you will need to re-run the `gatsby develop` command.

## References

- [GatsbyJs: Official tutorial - part 7][gatsbyjs-tutorial-7]
- [Surinder Bhomra: Include date in blog post slug][include-date-in-blog-post]

[gatsbyjs-tutorial-7]: https://www.gatsbyjs.com/docs/tutorial/part-seven/
[include-date-in-blog-post]:
  https://www.surinderbhomra.com/Blog/2020/01/11/Gatsby-Include-Date-In-Blog-Post-Slug
[gatsby]: https://www.gatsbyjs.com/
