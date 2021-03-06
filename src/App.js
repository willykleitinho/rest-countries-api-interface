import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Countries from './components/Countries'
import Spinner from './components/Spinner';
import Details from './components/Details';
import Error from './components/Error';

import {useState, useEffect} from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.main`
  padding: 1.5rem var(--side-padding);

  @media (min-width: 768px) {
    padding: 3rem var(--side-padding);
  }
`;

export default function App() {

  const [page, setPage] = useState('main');
  const [countries, setCountries] = useState(null);
  const [filter, setFilter] = useState('');
  const [showAll, setShowAll] = useState(false);
  
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
      .then(response => response.json()).then(data =>{
        if (data.message) {
          throw new Error(data.message);
        }
        setCountries(data)
      })
      .catch(err => setCountries('error'));
  }

  function backToMainPage(ev) {
    ev.preventDefault();
    setPage('main');
  }
  
  function updatePage(ev) {
    ev.preventDefault();
    setPage(ev.currentTarget.id);
  }
  
  function fetchAll(ev) {
    ev.stopPropagation();
    setCountries(null);
    
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json()).then(data => setCountries(data))
      .catch(err => setCountries('error'));
    
    setShowAll(true);
  }

  return (
    <>
      <Header />
      {(page === 'main')
        ? (
          <ContainerStyled>
            <SearchForm handleSubmit={handleSearchForm} setFilter={setFilter} />
            {!countries ?
              <Spinner /> :
              (countries === 'error') ? <Error message='Something went wrong...' /> : <Countries countries={countries.filter(item => (!filter) ? true : item.region === filter)} showAll={showAll} fetchAll={fetchAll} updatePage={updatePage} />}
          </ContainerStyled>
          )
        : (<Details code={page} backToMainPage={backToMainPage} updatePage={updatePage} page={page} />)
      }
    </>
  );
}
