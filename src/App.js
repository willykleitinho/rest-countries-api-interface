import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Countries from './components/Countries'
import Spinner from './components/Spinner';
import Details from './components/Details';

import {useState, useEffect} from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.main`
  padding: 1.5rem 1rem;
`;

// utility: delay code
// const delay = ms => new Promise(res => setTimeout(res, ms));


// suspense for data fetching do not work
export default function App() {

  const [page, setPage] = useState('main');
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v2/alpha?codes=DEU,USA,BRA,ISL,AFG,ALA,ALB,DZA')
      .then(response => response.json()).then(data => setCountries(data));
  }, []);

  function handleSearchForm(ev) {
    ev.preventDefault();
    const name = ev.target.querySelector('input').value;
    
    if(!name) {
      return;
    }

    setCountries(null);

    fetch(`https://restcountries.com/v2/name/${name}`)
      .then(response => response.json()).then(data => setCountries(data));
  }

  function backToMainPage(ev) {
    ev.preventDefault();
    setPage('main');
  }
  
  function updatePage(ev) {
    ev.preventDefault();
    setPage(ev.currentTarget.id);
  }

  return (
    <>
      <Header />
      {(page === 'main')
        ? (
          <ContainerStyled>
            <SearchForm handleSubmit={handleSearchForm} />
            {!countries ? <Spinner /> : <Countries countries={countries} updatePage={updatePage} />}
          </ContainerStyled>
          )
        : (<Details code={page} backToMainPage={backToMainPage} updatePage={updatePage} page={page} />)
      }
    </>
  );
}