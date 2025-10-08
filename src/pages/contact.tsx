import React from 'react';
import H from '../components/mdx/Headings';
import SiteMetaTags from '../components/SiteMetaTags';

const Head = () => <SiteMetaTags title="Contact Me - Literat" />;

const LinkedInProfileLink = () => (
  <a
    href="https://www.linkedin.com/in/tomaslitera/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn profile
  </a>
);

const ContactPage = () => (
  <>
    <H>Contact</H>
    <p>
      Hello! I get lots of email, so please scan this page before firing one
      off. Don't be afraid to email me, it just might take a few days (or weeks)
      for me to get back to you 😃.
    </p>
    <p>
      <strong>If you want me to work for you</strong>, I am open to new
      opportunities and your offer. But, please, check out my{' '}
      <LinkedInProfileLink /> first. If I am right guy for your job.
    </p>
    <p>
      <strong>
        If you want to know what font, theme, computer or toilet paper I use
      </strong>
      , all that info is available on my <a href="/uses">/uses</a> page.
    </p>
    <p>
      <strong>If you are a recruiter</strong>, I love you, but please don’t call
      me 🙂. Rather check out my <LinkedInProfileLink /> first and then email me
      particular offer. I'm also not able to help you find someone for your
      position.
    </p>
    <p>
      <strong>Yeah, you did it!</strong> For everything else including{' '}
      <strong>course suggestions</strong>, <strong>conference invites</strong>,{' '}
      <strong>private training</strong> and <strong>whitewater tips</strong>,
      please email <a href="mailto:hello@literat.dev">hello@literat.dev</a>
    </p>

    <p>Here are a few tips on writing me:</p>
    <ul>
      <li>Use paragraphs, avoid large walls of text.</li>
      <li>Number your asks if there are multiple</li>
      <li>Keep it as short as you can</li>
      <li>
        Post code on a git repo,{' '}
        <a href="https://codepen.io" target="_blank" rel="noreferrer">
          Codepen
        </a>{' '}
        or smaller stuff or errors in a{' '}
        <a href="https://gist.github.com/" target="_blank" rel="noreferrer">
          Gist
        </a>
        . Screenshots are helpful too!
      </li>
    </ul>

    <p>Thanks and have a great day!</p>
  </>
);

export default ContactPage;
export { Head };
