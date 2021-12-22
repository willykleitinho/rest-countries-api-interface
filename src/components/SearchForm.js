import Filter from './Filter'

import {useState} from 'react';

export default function SearchForm() {
  const [value, setValue] = useState('');

  return (
    <form>
      <input type='text' value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Search for a country...' />
      <Filter />
    </form>
  );
}