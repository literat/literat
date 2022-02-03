const gatsbyRemarkVSCode = require('gatsby-remark-vscode');

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
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        root: __dirname,
        extensions: [`.md`, `.mdx`],
        remarkPlugins: [
          [
            gatsbyRemarkVSCode.remarkPlugin,
            {
              theme: `Community-Material-Theme-Default-High-Contrast`,
              extensions: ['vsc-community-material-theme'],
            },
          ],
        ],
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Signika:400`, `Gothic A1:900`, `Fira Code:300,400`, `Fira Sans:300,400`],
        display: 'swap',
      },
    },
  ],
};
