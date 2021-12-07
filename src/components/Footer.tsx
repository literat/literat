import React from 'react';
import styled from 'styled-components';
import { IoLogoGithub } from 'react-icons/io';

const FooterStyles = styled.footer`
  background-color: var(--dark);
  padding-top: 180px;
  padding-bottom: 80px;
  clip-path: polygon(0 0, 100% 50px, 100% 100%, 0% 100%);
  & > div {
    display: grid;
    .bottom {
      grid-column: 1 / -1;
      text-align: center;
      background: none;
      color: var(--light);
    }
  }
  a.socialLink {
    background: var(--dark);
    padding: 2px 6px;
    border-radius: 4px;
    text-decoration: none;
    color: var(--light);
    display: inline-flex;
    align-items: center;
    margin: 2px;
    &[href*='github.com'] {
      background: var(--light);
      color: var(--dark);
    }
    svg {
      margin-right: 3px;
    }
  }
`;

const Footer = (): JSX.Element => (
  <FooterStyles>
    <div>
      <div className="bottom">
        I code on{' '}
        <a href="https://github.com/literat" target="_blank" rel="noreferrer noopener" className="socialLink">
          <IoLogoGithub /> GitHub
        </a>
        <p>Literat &copy; 2008 — {new Date().getFullYear()}</p>
      </div>
    </div>
  </FooterStyles>
);

export default Footer;
