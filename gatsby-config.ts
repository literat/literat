// @see: https://www.gatsbyjs.com/plugins/gatsby-remark-vscode/
import type { GatsbyConfig } from 'gatsby';
import gatsbyRemarkVSCode from 'gatsby-remark-vscode';

const { remarkPlugin } = gatsbyRemarkVSCode;
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'LITERAT',
    description: 'Fullstack Developer & Whitewater Kayaker & Scout',
  },
  trailingSlash: 'always',
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: false,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-remark-reading-time`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
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
        path: `./src/pages/`,
      },
      __key: 'pages',
    },
    // Posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/posts/`,
        name: 'post',
      },
      __key: 'posts',
    },
    // Images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/assets/images/`,
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': 'src',
        },
        extensions: ['ts', 'tsx'],
      },
    },
  ],
};

export default config;
