import Spinner from './Spinner';
import Error from './Error';

import styled from 'styled-components';
import {useState, useEffect} from 'react';

const ContainerStyled = styled.article`
  max-width: 35rem;
  margin: auto;
  margin-top: 4rem;

  img {
    width: 100%;
    max-width: 35rem;
    margin-bottom: 2rem;
    aspect-ratio: 640 / 460;
  }

  h2 {
    font-size: 1.35rem;
    margin-top: 0.25rem;
    margin-bottom: 1.5rem;
  }

  div {
    margin-bottom: 3rem;
  }

  .border-countries {
    margin-top: -0.8rem;

    p {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
  }

  p {
    font-size: 0.88rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
  }

  span {
    font-weight: 300;
  }

  @media (min-width: 760px) {
    .info {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: space-between;

      & > * {
        flex-basis: calc(50% - 1rem);
        margin: 0;
      }

      h2, .border-countries {
        flex-basis: 100%;
      }
    }

    h2 {
      font-size: 2rem;
    }

    .border-countries {
      margin-top: 1rem;

        p {
          font-size: 1rem;
          margin-bottom: 1rem;
        }
      }

    p {
      font-size: 1rem;
      margin-bottom: 0.7rem;
    }
  }

  @media (min-width: 1110px) {
    max-width: 80rem;
    display: flex;
    gap: 11.25%;
    align-items: center;
    margin-top: 5rem;

    img {
      align-self: center;
      margin: 0;
    }

    .info {
      margin: 0;
    }
    
    .border-countries {
      /* display: flex; */
      /* gap: 1rem; */
    }
  }
`;

const UlStyled = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  li {
    text-align: center;
    padding: 7px 15px;
    flex: 1;
    border-radius: 3px;
    background: var(--clr-background-elements);
    font-size: 0.65rem;
    letter-spacing: 0.5px;
    font-weight: 300;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
    display: grid;
    place-items: center;
  }

  a {
    text-decoration: none;
    color: var(--clr-text);
  }

  @media (min-width: 760px) {
  }
`;

export default function CountryInfo({updatePage, code}) {
  
  const [borderCountries, setBorderCountries] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${code}`)
    .then(response => response.json()).then(data => {
      
      if (data.message) {
        throw(new Error(data.message));
      }

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
    })
    .catch(err => setData('error'));
  }, [code]);

  if (data === 'error') {
    return (<Error message='Something went wrong...' />);
  }

  return (
    <ContainerStyled>
      {(!data)
        ? <Spinner />
        : <>
          <img src={data.flag} alt='country flag' />
          <div className='info'>
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
            <div className='border-countries'>
              <p>Border Countries:</p>
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
          </div>
        </>
      }
    </ContainerStyled>
  );
}