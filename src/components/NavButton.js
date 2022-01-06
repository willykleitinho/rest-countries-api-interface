import styled from "styled-components";

const AStyled = styled.a`
  display: block;
  width: max-content;
  padding: 0.5rem 1.5rem;
  background: var(--clr-background-elements);
  color: var(--clr-text);
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.8rem;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
  font-family: var(--font-family);

  span {
    margin-right: 15px;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    padding:0.5rem 2rem;
    padding-right: calc(2rem + 5px);
  }
`;

export default function NavButton({text, icon, handleClick, url}) {
  return (
    <AStyled href={url} onClick={handleClick}>
      <span>{icon}</span>
      {text}
    </AStyled>
  )
}