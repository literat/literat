import React from "react"
import { graphql, Link } from "gatsby"

const Template = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  const { title } = markdownRemark.frontmatter
  const { next, previous } = pageContext

  return (
    <div>
      <h1 style={{ fontFamily: "avenir" }}>{title}</h1>
      <div
        className="blogpost"
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ fontFamily: "avenir" }}
      />
      <div style={{ marginBottom: "1rem", fontFamily: "avenir" }}>
        {next && <Link to={next.frontmatter.path}>Next</Link>}
      </div>
      <div style={{ fontFamily: "avenir" }}>
        {previous && <Link to={previous.frontmatter.path}>Previous</Link>}
      </div>
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
