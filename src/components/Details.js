import Spinner from './Spinner';
import NavButton from './NavButton';
import CountryInfo from './CountryInfo';

import {useState, useEffect} from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  padding: 1.5rem 1rem;
`;

export default function Details({code, backToMainPage, updatePage}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${code}`)
    .then(response => response.json()).then(data => {
      console.log(data);
      setData(data)
    });
  }, [code]);
  

  return (
    <ContainerStyled>
    <NavButton text='Go back' url='#' handleClick={backToMainPage}/>
    {
      (!data) 
      ? <Spinner /> :
      (
        <>
          <CountryInfo data={data} updatePage={updatePage} key={code}/>
        </>
      )
    }
    </ContainerStyled>
  )
}
