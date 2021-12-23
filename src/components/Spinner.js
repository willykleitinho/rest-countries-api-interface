import styled from 'styled-components';

const DivStyled = styled.div`
  padding: 1.5rem 1rem;

  div {
    width: 40px;
    height: 40px;
    margin: auto;
    border: 4px solid var(--clr-text);
    border-right: 4px solid transparent;
    border-radius: 100px;
    animation: rotate 1s infinite linear;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Spinner() {
  return (
    <DivStyled>
      <div></div>
    </DivStyled>
  )
}