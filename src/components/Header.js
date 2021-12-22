import styled from 'styled-components';

const HeaderStyled = styled.header`
  color: var(--DarkGray-LightModeInput);
  padding: 2rem var(--side-padding);
  background: var(--clr-background-elements);
  display: flex;

  .title {
    font-size: 1rem;
    flex: 1;
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <h1 className='title'>Where in the world?</h1>
      <button onClick={() => console.log('theme toggled.')}>theme</button>
    </HeaderStyled>
  );
}