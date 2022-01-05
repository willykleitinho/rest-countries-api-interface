import styled from 'styled-components';

const HeaderStyled = styled.header`
  color: var(--DarkGray-LightModeInput);
  padding: 2rem var(--side-padding);
  background: var(--clr-background-elements);
  display: flex;

  .title {
    font-size: 0.85rem;
    flex: 1;
  }

  button {
    border: 0;
    background: none;
    color: var(--DarkGray-LightModeInput);
    font-family: var(--font-family);
    font-size: 0.8rem;
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <h1 className='title'>Where in the world?</h1>
      <button onClick={() => (document.body.className) ? document.body.className = '' : document.body.className = 'dark-theme'}>🌙 Dark Mode</button>
    </HeaderStyled>
  );
}