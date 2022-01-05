import Spinner from './Spinner';

import styled from 'styled-components';
import {useState, useEffect} from 'react';

const ContainerStyled = styled.article`
  img {
    width: 100%;
    margin: 2rem 0;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  div {
    margin-bottom: 2rem;
  }

  p {
    font-weight: 600;
    margin: 0.5rem 0;
  }

  span {
    font-weight: 300;
  }
`;

const UlStyled = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  li {
    padding: 5px 10px;
    border-radius: 3px;
    background: var(--clr-background-elements);
  }

  a {
    text-decoration: none;
    color: var(--clr-text);
  }
`;

export default function CountryInfo({updatePage, code}) {
  
  const [borderCountries, setBorderCountries] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${code}`)
    .then(response => response.json()).then(data => {
      console.log(data);
      setData(data);
      if (data.borders) {
        fetch(`https://restcountries.com/v2/alpha?codes=${data.borders.join(',')}`)
        .then(response => response.json())
        .then(data => setBorderCountries(data.map(item => {
          return {
            name: item.name,
            alpha3Code: item.alpha3Code
          };
        })));
      } else {
        setBorderCountries('none');
      }
    });
  }, [code]);

  return (
    <ContainerStyled>
      {(!data)
        ? <Spinner />
        : <>
          <img src={data.flag} alt='country flag' />
          <h2>{data.name}</h2>
          <div>
            <p>Native name: <span>{data.nativeName}</span></p>
            <p>Population: <span>{data.population}</span></p>
            <p>Region: <span>{data.region}</span></p>
            <p>Sub Region: <span>{data.subregion}</span></p>
            <p>Capital: <span>{data.capital}</span></p>
          </div>
          <div>
            <p>Top Level Domain: <span>{data.topLevelDomain.join(' - ')}</span></p>
            <p>Currencies: <span>{data.currencies.map(item => item.name).join(', ')}</span></p>
            <p>Languages: <span>{data.languages.map(item => item.name).join(', ')}</span></p>
          </div>
          <div>
            <p>Border countries:</p>
            {!borderCountries ?
              <Spinner /> :
              <UlStyled>
                {borderCountries === 'none' ? 'None' : borderCountries.map(country => (
                  <li key={country.alpha3Code} onClick={() => setData(null)}>
                    <a href={`#${country.alpha3Code}`} id={country.alpha3Code} onClick={updatePage}>
                      {country.name}
                    </a>
                  </li>
                ))}
              </UlStyled>
            }
          </div>
        </>
      }
    </ContainerStyled>
  );
}