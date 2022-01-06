import NavButton from './NavButton';
import CountryInfo from './CountryInfo';

import styled from 'styled-components';

const ContainerStyled = styled.div`
  padding: 2.25rem 1.75rem;
`;

export default function Details({code, backToMainPage, updatePage}) {
  return (
    <ContainerStyled>
      <NavButton icon='⬅' text='Back' url='#' handleClick={backToMainPage}/>
      <CountryInfo updatePage={updatePage} code={code}/>
    </ContainerStyled>
  )
}
