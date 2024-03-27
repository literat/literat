// @see: https://www.gatsbyjs.com/plugins/gatsby-remark-vscode/
const gatsbyRemarkVSCode = require('gatsby-remark-vscode');
const { remarkPlugin } = gatsbyRemarkVSCode;

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'LITERAT',
    description: 'Fullstack Developer & Whitewater Kayaker & Scout',
  },
  trailingSlash: 'always',
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-remark-reading-time`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        root: __dirname,
        extensions: [`.md`, `.mdx`],
        mdxOptions: {
          remarkPlugins: [
            [
              // @see: /src/posts/2022-03-02-gatsby-post-code-formatting
              remarkPlugin,
              {
                theme: `Solarized Dark`,
                // @see: https://github.com/styled-components/vscode-styled-components
                extensions: ['vscode-styled-components'],
                inlineCode: {
                  marker: '»',
                },
              },
            ],
          ],
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1500,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
    },
    // Pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    // Posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'post',
      },
    },
    // Images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};
