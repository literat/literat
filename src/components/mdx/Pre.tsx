import { styled } from "styled-components";

const Pre = styled.pre`
  margin-top: calc(2 * (1.68 * (10px + 0.2vw) + 0.2vw));
  margin-bottom: calc(2 * (1.68 * (10px + 0.2vw) + 0.2vw));
  margin-right: calc(-1 * ((80vw - 100%) / 2));
  margin-left: calc(-1 * ((80vw - 100%) / 2));
  padding: calc(1 * (1.68 * (18px + 0.2vw) + 0.2vw)) 0;
  font-size: 0.85em;
  font-family: 'Fira Code', Menlo, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;

  @media only screen and (min-width: 600px) {
    clip-path: polygon(0 calc(0% + 15px), 100% 0, 100% calc(100% - 15px), 0% 100%);
  }

  :after {
    content: attr(data-language);
    opacity: 0.7;
    display: inline-block;
    transform: translate(-16px, 24px);
    text-align: right;
    font-size: 1.5rem;
  }
`;

export default Pre;
