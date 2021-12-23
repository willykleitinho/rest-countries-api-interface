import styled from 'styled-components';

const AStyled = styled.a`
  color: var(--clr-text);
  text-decoration: none;

  &:visited {
    color: var(--clr-text);
  }
`;;

const SectionStyled = styled.section`
  width: 100%;
  background: var(--clr-background-elements);
  margin-bottom: 2rem;
  border-radius: 7px;
  overflow: hidden;

  img {
    width: 100%;
  }

  .info {
    padding: 1.5rem 2rem;

    h2 {
      margin-bottom: 1.5rem;
      font-size: 1.25rem;
    }

    p {
      font-weight: 600;
      padding-bottom: 0.5rem;
    }
    
    span {
      font-weight: 300;
    }
  }
`;

function Country({flagSrc, name, population, region, capital}) {
  return (
    <SectionStyled>
      <img src={flagSrc} alt='flag' />
      <div className='info'>
        <h2>{name}</h2>
        <p>Population: <span>{population}</span></p>
        <p>Region: <span>{region}</span></p>
        <p>Capital: <span>{capital}</span></p>
      </div>
    </SectionStyled>
  );
}

export default function Countries({countries, updatePage}) {
  if (countries.status === 404) {
    return (<h1>not found</h1>);
  }

  return countries.map(({alpha3Code, name, flags, population, region, capital}) => {
    return (
      <AStyled key={alpha3Code} id={alpha3Code} href={`#${alpha3Code}`} onClick={updatePage}>
        <Country  name={name} flagSrc={flags.svg} population={population} region={region} capital={capital} />
      </AStyled>
    );
  });
}