import styled from 'styled-components';

const Code = styled.code`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.2em;
  padding-right: 1.2em;

  &:not(.grvsc-code) {
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
  }
`;

export default Code;
