import styled from 'styled-components';

const StyledHeader = styled.header`
  border-bottom: 1px solid black;
  color: var(--DarkGray-LightModeInput);
  padding: 0.5rem var(--side-padding);

  .title {
    font-size: 1.5rem;

  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1 className='title'>Where in the world?</h1>
      <button onClick={() => console.log('theme toggled.')}>theme</button>
    </StyledHeader>
  );
}