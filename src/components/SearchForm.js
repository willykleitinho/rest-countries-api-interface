import {useState} from 'react';
import styled from 'styled-components';

const sharedStyle = `
  padding: 1rem 1.5rem;
  background: var(--clr-background-elements);
  color: var(--clr-text);
  border: 0;
  margin-bottom: 2rem;
  border-radius: 7px;
`;

const InputStyled = styled.input`
  ${sharedStyle}
  
  &:focus {
    outline: 1px solid white;
  }
`;

const SelectStyled = styled.select`
  ${sharedStyle}
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function SearchForm() {
  const [value, setValue] = useState('');

  return (
    <FormStyled>
      <InputStyled type='text' value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Search for a country...' />
      
      <SelectStyled name='region'>
        <option value=''>Filter by Region</option>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </SelectStyled>
    </FormStyled>
  );
}