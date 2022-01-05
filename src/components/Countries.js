import styled from 'styled-components';

const AStyled = styled.a`
  color: var(--clr-text);
  text-decoration: none;
  margin-bottom: 2.5rem;
  flex-shrink: 0;

  &:visited {
    color: var(--clr-text);
  }
`;;

const SectionStyled = styled.section`
  width: 100%;
  background: var(--clr-background-elements);
  margin: auto;
  border-radius: 7px;
  overflow: hidden;
  width: 16.5rem;

  .flag {
    width: 100%;
    aspect-ratio: 265 / 160;
  }

  .info {
    padding: 1.35rem 1.5rem;
    padding-bottom: 2.5rem;

    h2 {
      margin-bottom: 1rem;
      font-size: 1.15rem;
    }

    p {
      font-weight: 600;
      margin-bottom: 0.25rem;
      font-size: 0.9rem;
    }
    
    span {
      font-weight: 300;
    }
  }
`;

function Country({flagSrc, name, population, region, capital}) {
  return (
    <SectionStyled>
      {/* <img src={flagSrc} alt='flag' /> */}
      <div className='flag' style={{
        background: `url(${flagSrc}) center center`,
        backgroundSize: 'cover'
      }}></div>
      <div className='info'>
        <h2>{name}</h2>
        <p>Population: <span>{population}</span></p>
        <p>Region: <span>{region}</span></p>
        <p>Capital: <span>{capital}</span></p>
      </div>
    </SectionStyled>
  );
}

const DivStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
  
`;

export default function Countries({countries, updatePage}) {
  if (countries.status === 404) {
    return (<h1>not found</h1>);
  }

  return (
    <DivStyled>
      {countries.map(({alpha3Code, name, flags, population, region, capital}) => {
        return (
          <AStyled key={alpha3Code} id={alpha3Code} href={`#${alpha3Code}`} onClick={updatePage}>
            <Country  name={name} flagSrc={flags.svg} population={population} region={region} capital={capital} />
          </AStyled>
        );
      })}
    </DivStyled>
  );
}