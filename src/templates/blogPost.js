import React from "react"

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  const { title } = markdownRemark.frontmatter

  return (
    <div>
      <h1 style={{ fontFamily: "avenir" }}>{title}</h1>
      <div
        className="blogpost"
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ fontFamily: "avenir" }}
      ></div>
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
