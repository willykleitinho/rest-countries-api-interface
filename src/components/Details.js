import NavButton from './NavButton';
import CountryInfo from './CountryInfo';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  padding: 1.5rem 1rem;
`;

export default function Details({code, backToMainPage, updatePage}) {
  return (
    <ContainerStyled>
      <NavButton text='Go back' url='#' handleClick={backToMainPage}/>
      <CountryInfo updatePage={updatePage} code={code}/>
    </ContainerStyled>
  )
}
