import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

interface SiteMetadata {
  title: string;
  description: string;
}

interface Site {
  siteMetadata: SiteMetadata;
}

interface Data {
  site: Site;
}
interface TitleAndDescriptionProps {
  data: Data;
}

const TitleAndDescription = ({
  data,
}: TitleAndDescriptionProps): JSX.Element => {
  const { title, description } = data.site.siteMetadata;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Signika',
      }}
    >
      <h2 style={{ marginBottom: 0, fontFamily: 'Gothic A1' }}>{title}</h2>
      <p style={{ marginTop: 0, opacity: 0.5 }}>{description}</p>
    </div>
  );
};

const Header = () => (
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
    render={(data) => <TitleAndDescription data={data} />}
  />
);

export default Header;
