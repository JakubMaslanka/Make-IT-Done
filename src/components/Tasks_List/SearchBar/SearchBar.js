import React, { useState, useEffect } from 'react';
import { SearchContainer } from './SearchBar.styles';
import { ReactComponent as SearchIcon } from '../../utilities/assets/search_icon.svg';

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setSearchTerm(searchTerm);
        // place for searchCharacters function
      }, 1500);
      return () => {
        clearTimeout(handler);
      };
    },
    [searchTerm],
  );
  return (
    <>
      <SearchContainer>
        <SearchIcon fill="#128069" />
        <input placeholder="I'm looking for..." type="text" onChange={(e) => setSearchTerm(e.target.value)} />
      </SearchContainer>
    </>
  );
}
