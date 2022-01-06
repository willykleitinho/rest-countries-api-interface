import styled from 'styled-components';

const HeaderStyled = styled.header`
  color: var(--clr-text);
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
    color: var(--clr-text);
    font-family: var(--font-family);
    font-size: 0.8rem;
  }

  .attribution {
    padding-top: 5px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 0.66rem;
    font-family: var(--font-family);
    text-align: center;
    color: var(--clr-text);
    opacity: 0.5;
    transition: opacity 100ms;

    a {
      color: var(--clr-text);
      font-weight: 600;
      text-decoration: none;
      font-size: 0.88rem;
      position: relative;

      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0%;
        height: 2px;
        background-color: var(--clr-text);
        transition: width 300ms, transform 300ms;
      }
      &:hover::after {
        width: 100%;
        transform: translateX(-50%);
      }
    }

    &:hover {
      opacity: 1;
    }
  }

  @media (min-width: 760px) {
    padding: 1.5rem var(--side-padding);

    .title {
      font-size: 1.45rem;
    }

    button {
      font-size: 1rem;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <p className='attribution'>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
        Coded by <a href="https://github.com/willykleitinho">willykleitinho</a>.
      </p>
      <h1 className='title'>Where in the world?</h1>
      <button onClick={() => (document.body.className) ? document.body.className = '' : document.body.className = 'dark-theme'}>🌙 Dark Mode</button>
    </HeaderStyled>
  );
}