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
    siteUrl: `https://literat.dev`,
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
    // RSS Feed
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                const path = ['codes', 'uses'].includes(edge.node.fields.slug)
                  ? '/'
                  : `/blog/${edge.node.frontmatter.date}/`;

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.excerpt,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}${path}${edge.node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}${path}${edge.node.fields.slug}`,
                });
              });
            },
            query: `
              {
                allMdx(sort: { frontmatter: { date: ASC } }) {
                  edges {
                    node {
                      fields {
                        path
                        slug
                      }
                      frontmatter {
                        title
                        tags
                        date
                        excerpt
                        image {
                          publicURL
                        }
                      }
                      parent {
                        ... on File {
                          absolutePath
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Literat.dev RSS Feed',
          },
        ],
      },
    },
  ],
};

export default config;
