import React from 'react';
import { Helmet } from 'react-helmet';
import H from '../components/mdx/Headings';

const TalksPage = () => (
  <>
    <Helmet>
      <title>Giving Talks - Literat</title>
    </Helmet>
    <H>Giving Talks</H>
    <p>
      Hey! My name is Tomas Litera, but rather use Literat. I am a Fullstack
      Pirate Engineer living in Kolín. I am focusing on many areas of web
      development, starting from frontend (HTML, CSS, JS, React), continuing
      with backend (Node.js, Deno, Bun, databases) and finishing with DevOps
      (Docker, CI/CD, AWS, Serverless), etc.
    </p>
    <p>
      <a href="/talks">Talks I have given.</a>
    </p>
    <H as="h2">Information</H>
    <div>
      <div>Name</div>
      <div>Tomas Litera</div>
      <div>Photo</div>
      <div>
        <a href="">https://literat.dev/photo.png</a>
      </div>
      <div>Introduction</div>
      <div>
        Tomas is a fullstack engineer, kayaker and Scout member from Kolín. He
        focuses on React, Node and serverless solutions, as well as HTML, CSS
        and JS in general. He enjoys discovering new rivers and teaching young
        people how to survive in nature.
      </div>
      <div>Bio</div>
      <div>
        Tomáš Litera, aka Literat, is a fullstack engineer and team leader from
        Kolín. Fascinated by web development since elementary school, he has
        grown through PHP, JavaScript, Serverless, and React to his current work
        on the Spirit Design System at Alma Career. A long-time member of Junák
        - Czech Scouting, former leader, and educator, he loves whitewater
        kayaking and other outdoor sports. Husband, proud father, and dog owner.
      </div>
      <div>Location</div>
      <div>Kolin, Czech Republic</div>
      <div>Company</div>
      <div>Alma Career / Alma</div>
      <div>Website</div>
      <div>https://literat.dev</div>
      <div>GitHub</div>
      <div>https://github.com/literat</div>
      <div>Blue Sky</div>
      <div>https://bluesky.social/@literat</div>
      <div>Twitter</div>
      <div>https://twitter.com/tomaslitera</div>
      <div>Instagram</div>
      <div>https://www.instagram.com/literat.dev/</div>
      <div>Linkedin</div>
      <div>https://www.linkedin.com/in/tomaslitera/</div>
    </div>
  </>
);

export default TalksPage;
