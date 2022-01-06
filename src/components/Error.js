import styled from 'styled-components';

const PStyled = styled.p`
  padding: 1.5rem 2rem;
  text-align: center;
  background-color: rgba(255, 25, 25, 0.25);
  margin: 2rem 0;
  border-radius: 5px;
`;

export default function Error({message}) {
  return (
    <PStyled>{message}</PStyled>
  );
}