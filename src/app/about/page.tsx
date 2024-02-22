import AgeInYears from '@/components/AgeInYears';
import OutLink from '@/components/OutLink';
import H from '@/components/mdx/Headings';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import family from '../../../public/assets/images/family.jpg';
import whitewater from '../../../public/assets/images/whitewater.jpg';

export const metadata: Metadata = {
  title: 'About Me',
};

export default function AboutPage() {
  return (
    <>
      <H>About me</H>
      <p>Hello, I'm Tomas Litera, shortly Literat.</p>
      <H as="h3">In a nutshell...</H>
      <p>
        I am a web developer, whitewater kayaker and scout from Kolin in the Czech republic 🇨🇿. I am <Suspense fallback={<>{35}</>}><AgeInYears /></Suspense> years
        old and I have been making websites from primary school.
      </p>
      <p>
        I use HTML, CSS and JavaScript. Though constantly changing, my focus right now is React.js, Node, Express,
        Serverless, Gatsby and Next.js. And not a long time ago it was PHP and Laravel.
      </p>
      <H as="h3">A few more things...</H>
      <p>
        <strong>I've been in love with web development</strong> for over half my life. Seems weird, right? It's a space
        of constant improvement and new & exciting technology. I consider myself a hacker in that I'm always using
        technology to solve my life's problems and ambitions.
      </p>
      <p>
        <strong>I live</strong> in a small city not far away from Prague. It is called Kolin. I live here in a first
        republic house with my wife Dita, one boy, two girls and a dog named Charlie. We spend our summers mainly
        traveling with our van or with canoes on different rivers.
      </p>
      <Image
        src={family}
        alt="My family"
        loading='lazy'
        sizes='(min-width: 1200px) 1200px, 100vw'
        placeholder='blur'
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <p>
        <strong>I have a few hobbies.</strong> Most of my free time I spend on a river in my kayak. I really love
        whitewater kayaking. Every year I am going to a different country in a search of new rivers and whitewater
        sections. The best places are in Austria 🇦🇹, south France 🇫🇷 the Italian province of Piedmont 🇮🇹. The Czech
        republic has also its whitewater jewels like{' '}
        <OutLink link="https://www.devilsextremerace.com/" title="Devils Extreme Race">
          Devil's streams
        </OutLink>{' '}
        and gorges on Elbe or Jizera rivers.
      </p>
      <Image
        src={whitewater}
        alt="Trnava Xtreme Race"
        loading='lazy'
        sizes='(min-width: 900px) 900px, 100vw'
        placeholder='blur'
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <p>
        <strong>I also love to teach and work with young people.</strong> Since 2004 I am member of czech scout
        assosiation,{' '}
        <OutLink link="https://skaut.cz/" title="Junák - czech scout Homepage">
          Junák - český skaut
        </OutLink>
        . In my unit{' '}
        <OutLink link="https://poutnicikolin.cz/" title="Poutníci Kolín - sea scouts">
          Poutníci Kolín
        </OutLink>{' '}
        we teach young people to survive in a wild, to live in harmony with nature and to find their own place in
        today's world. Simply we are trying to create a better world.
      </p>
    </>
  );
};
