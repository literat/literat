/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "LITERAT",
    description: "Fullstack Developer & Whitewater Kayaker & Scout",
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Signika\:400`,
          `Gothic A1\:900`,
          `Fira Code\:300,400`,
          `Fira Sans\:300,400`,
        ],
        display: "swap",
      },
    },
  ],
}
