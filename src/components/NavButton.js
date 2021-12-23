import styled from "styled-components";

const AStyled = styled.a`
  display: block;
  margin-bottom: 1rem;
  width: max-content;
  padding: 0.75rem 2rem;
  background: var(--clr-background-elements);
  color: var(--clr-text);
  text-decoration: none;
  border-radius: 5px;
`;

export default function NavButton({text, handleClick, url}) {
  return (
    <AStyled href={url} onClick={handleClick}>{text}</AStyled>
  )
}