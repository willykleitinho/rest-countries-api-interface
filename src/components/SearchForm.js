import {useState} from 'react';
import styled from 'styled-components';

const sharedStyle = `
  padding: 1rem 1.5rem;
  background: var(--clr-background-elements);
  color: var(--clr-text);
  border: 0;
  border-radius: 7px;
  font-size: 0.75rem;
  font-weight: 300;
  font-family: var(--font-family);

  @media (min-width: 760px) {
    font-size: 1rem;
    padding: 1.1rem 1.5rem;
  }
`;

const InputStyled = styled.input`
  ${sharedStyle}
  width: 100%; 
  padding-left: 4rem;

  &:focus {
    outline: 1px solid white;
  }

  @media (min-width: 760px) {
    padding-left: 5rem;
  }
`;

const SelectStyled = styled.select`
  ${sharedStyle}
  width: 12.5rem;
  flex: 0;
`;

const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: space-between;
  margin-bottom: 33px;

  input {
    flex: 1;
  }

  .input-container {
    flex: 1;
    min-width: 15rem;
    max-width: 30rem;
    position: relative;
  }

  .input-container::before {
    display: block;
    content: '🔎';
    position: absolute;
    top: 15%;
    left: 5%;
    font-size: 1.5rem;
  }

  @media (min-width: 760px) {
    margin-bottom: 3rem;
    
    .input-container::before {
      top: 15%;
      left: 4%;
      font-size: 1.75rem;
    }
  }
`;

export default function SearchForm({handleSubmit, setFilter}) {
  const [value, setValue] = useState('');

  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className='input-container'>
        <InputStyled name='name' type='text' value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Search for a country...' />
      </div>

      <SelectStyled onChange={(ev) => setFilter(ev.target.value)} name='region'>
        <option value=''>Filter by Region</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>Americas</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </SelectStyled>
    </FormStyled>
  );
}