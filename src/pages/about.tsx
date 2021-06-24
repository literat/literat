import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from '../components/Img';

const useOldMe = () => {
  const birth = 583588801000;
  const [age, setAge] = useState(Date.now() - birth);

  return {
    age,
    // this doesn't account for leap years and will be wrong in about 1400 years
    ageAsYears: Math.floor(age / 1000 / 60 / 60 / 24 / 365),
  };
};

interface AboutPageProps {
  data: {
    family: string;
    whitewater: string;
  };
}

const AboutPage = ({ data }: AboutPageProps) => {
  const { ageAsYears } = useOldMe();

  return (
    <>
      <Helmet>
        <title>About Me - Literat</title>
      </Helmet>
      <h1>About me</h1>
      <p>Hello, I'm Tomas Litera, shortly Literat.</p>
      <h3>In a nutshell...</h3>
      <p>
        I am a web developer, whitewater kayaker and scout from Kolin in the
        Czech republic 🇨🇿. I am {ageAsYears} years old and I have been making
        websites from primary school.
      </p>
      <p>
        I use HTML, CSS and JavaScript. Though constantly changing, my focus
        right now is React.js, Node, Express, Serverless, Gatsby and Next.js.
        And not a long time ago it was PHP and Laravel.
      </p>
      <h3>A few more things...</h3>
      <p>
        <strong>I've been in love with web development</strong> for over half my
        life. Seems weird, right? It's a space of constant improvement and new &
        exciting technology. I consider myself a hacker in that I'm always using
        technology to solve my life's problems and ambitions.
      </p>
      <p>
        <strong>I live</strong> in a small city not far away from Prague. It is
        called Kolin. I live here in a first republic house with my wife Dita,
        one boy, two girls and a dog named Charlie. We spend our summers mainly
        traveling with our van or with canoes on different rivers.
      </p>
      <Img image={data.family} alt="My Family" />
      <p>
        <strong>I have a few hobbies.</strong> Most of my free time I spend on a
        river in my kayak. I really love whitewater kayaking. Every year I am
        going to a different country in a search of new rivers and whitewater
        sections. The best places are in Austria 🇦🇹, south France 🇫🇷 the Italian
        province of Piedmont 🇮🇹. The Czech republic has also its whitewater
        jewels like{' '}
        <a
          href="https://www.devilsextremerace.com/"
          title="Devils Extreme Race"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devil's streams
        </a>{' '}
        and gorges on Elbe or Jizera rivers.
      </p>
      <Img image={data.whitewater} alt="Trnava Xtreme Race" />
      <p>
        <strong>I also love to teach and work with young people.</strong> Since
        2004 I am member of czech scout assosiation,{' '}
        <a
          href="https://skaut.cz/"
          title="Junák - czech scout Homepage"
          target="_blank"
          rel="noopener noreferrer"
        >
          Junák - český skaut
        </a>
        . In my unit{' '}
        <a
          href="https://poutnicikolin.cz/"
          title="Poutníci Kolín - sea scouts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Poutníci Kolín
        </a>{' '}
        we teach young people to survive in a wild, to live in harmony with
        nature and to find their own place in today's world. Simply we are
        trying to create a better world.
      </p>
    </>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    whitewater: file(relativePath: { eq: "whitewater.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    family: file(relativePath: { eq: "family.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
