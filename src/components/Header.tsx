import React from "react"
import { StaticQuery, graphql } from "gatsby"

const TitleAndDescription = ({ data }) => {
  const { title, description } = data.site.siteMetadata

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Signika",
      }}
    >
      <h2 style={{ marginBottom: 0, fontFamily: "Gothic A1" }}>{title}</h2>
      <p style={{ marginTop: 0, opacity: 0.5 }}>{description}</p>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header
