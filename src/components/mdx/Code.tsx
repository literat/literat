import styled from 'styled-components';

const Code = styled.code`
  /* margin-left: auto;
  margin-right: auto;
  padding-left: 1.2em;
  padding-right: 1.2em; */

  background: #f9f7fb;
  border: 1px solid #ede7f3;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.9375em;
  margin-left: auto;
  margin-right: auto;

  &:not(.grvsc-code) {
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
  }
`;

export default Code;
