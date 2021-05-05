import styled from 'styled-components';

const ContainerStyles = styled.div`
  --size: 40px;
  @media (max-width: 800px) {
    --size: 20px;
  }
  --borderSize: calc(var(--size) / 2);

  box-sizing: border-box;
  border: var(--borderSize) solid var(--light);
  border-color: var(--light);
  position: relative;

  &:after {
    box-sizing: content-box;
    display: block;
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: calc(var(--borderSize) * -1);
    left: calc(var(--borderSize) * -1);
    z-index: -3;
    border: var(--borderSize) solid var(--light);
    background: var(--light);
  }

  &:before {
    box-sizing: content-box;
    display: block;
    content: '';
    height: calc(100% - var(--size));
    width: calc(100% - var(--size));
    position: absolute;
    top: calc(var(--size) * -0.5);
    left: calc(var(--size) * -0.5);
    z-index: -1;
    border: var(--size) solid transparent;
    background-size: 250px;
  }
`;

export default ContainerStyles;
