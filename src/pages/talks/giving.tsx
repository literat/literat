import React from 'react';
import { Link } from 'gatsby';
import H from '../../components/mdx/Headings';
import PageMetaTags from '../../components/PageMetaTags';
import {
  useLangToggleState,
  LangToggle,
} from '../../components/Content/LangToggle';
import {
  SpeakerInfo,
  SpeakerInfoItem,
  SpeakerInfoHeading,
} from '../../components/Content/SpeakerInfo';

const content = {
  en: {
    name: 'Tomas Litera',
    introduction:
      'Tomas is a fullstack engineer, kayaker and Scout member from Kolín. He focuses on React, Node and serverless solutions, as well as HTML, CSS and JS in general. He enjoys discovering new rivers and teaching young people how to survive in nature.',
    bio: 'Tomáš Litera, aka Literat, is a fullstack engineer and team leader from Kolín. Fascinated by web development since elementary school, he has grown through PHP, JavaScript, Serverless, and React to his current work on the Spirit Design System at Alma Career. A long-time member of Junák - Czech Scouting, former leader, and educator, he loves whitewater kayaking and other outdoor sports. Husband, proud father, and dog owner.',
    location: 'Kolin, Czech Republic',
  },
  cs: {
    name: 'Tomáš Litera',
    introduction:
      'Tomáš je webový vývojář, kajakář a skaut z Kolína. Zaměřuje se na React, Node a serverless řešení, ale i HTML, CSS a JS obecně. Rád objevuje nové řeky a učí mladé lidi, jak přežít v přírodě.',
    bio: 'Tomáš Litera, známý jako Literat, je fullstack engineer a team leader z Kolína. Webový vývoj ho fascinoval už na základní škole a jeho cesta vedla přes PHP, JavaScript, Serverless a React až k současné práci na Spirit Design Systemu v Alma Career. Dlouholetý člen Junáka - českého skauta, bývalý vedoucí a instruktor. Milovník jízdy na kajaku na divoké vodě a dalších outdoorových sportů. Manžel, hrdý otec a majitel psa.',
    location: 'Kolín, Česká republika',
  },
};

interface GivingTalksPageProps {
  location: Location;
}

const GivingTalksPage = ({ location }: GivingTalksPageProps) => {
  const { lang, toggleLang } = useLangToggleState('en', location);

  return (
    <>
      <H>Giving Talks</H>
      <p>
        Hey! My name is <Link to="/">Tomas Litera</Link>, but rather use
        Literat. I am a Fullstack Pirate Engineer living in Kolín. I am focusing
        on many areas of web development, starting from frontend (HTML, CSS, JS,
        React), continuing with backend (Node.js, Deno, Bun, databases) and
        finishing with DevOps (Docker, CI/CD, AWS, Serverless), etc.
      </p>
      <p>
        <Link to="/talks">Talks I have given.</Link>
      </p>
      <SpeakerInfoHeading>
        <H as="h2">Information</H>
        <LangToggle lang={lang} toggleLang={toggleLang} />
      </SpeakerInfoHeading>
      <SpeakerInfo>
        <SpeakerInfoItem label="Name">{content[lang].name}</SpeakerInfoItem>
        <SpeakerInfoItem label="Photo">
          <a href="/photo.png">https://literat.dev/photo.png</a>
        </SpeakerInfoItem>
        <SpeakerInfoItem label="Avatar">
          <a href="/avatar.png">https://literat.dev/avatar.png</a>
        </SpeakerInfoItem>
        <SpeakerInfoItem label="Introduction">
          {content[lang].introduction}
        </SpeakerInfoItem>
        <SpeakerInfoItem label="Bio">{content[lang].bio}</SpeakerInfoItem>
        <SpeakerInfoItem label="Location">
          {content[lang].location}
        </SpeakerInfoItem>
        <SpeakerInfoItem label="Company">Alma Career / Alma</SpeakerInfoItem>
        <SpeakerInfoItem label="Website">
          <Link to="/">literat.dev</Link>
        </SpeakerInfoItem>
        <SpeakerInfoItem label="GitHub">
          <a href="https://github.com/literat">literat</a>
        </SpeakerInfoItem>
        <SpeakerInfoItem label="Blue Sky">
          <a href="https://bluesky.social/@literat">@literat</a>
        </SpeakerInfoItem>
        <SpeakerInfoItem label="Twitter">
          <a href="https://twitter.com/tomaslitera">@tomaslitera</a>
        </SpeakerInfoItem>
        <SpeakerInfoItem label="Instagram">
          <a href="https://www.instagram.com/literat.dev/">@literat.dev</a>
        </SpeakerInfoItem>
        <SpeakerInfoItem label="LinkedIn">
          <a href="https://www.linkedin.com/in/tomaslitera/">@tomaslitera</a>
        </SpeakerInfoItem>
        <SpeakerInfoItem label="Facebook">
          <a href="https://www.facebook.com/literat">@literat</a>
        </SpeakerInfoItem>
      </SpeakerInfo>
    </>
  );
};

export default GivingTalksPage;

export const Head = () => <PageMetaTags title="Giving Talks - Literat" />;
