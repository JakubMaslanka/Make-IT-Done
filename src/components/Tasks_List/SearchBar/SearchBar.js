import React, { useState, useEffect, useRef } from 'react';
import { SearchContainer } from './SearchBar.styles';
import { ReactComponent as SearchIcon } from '../../../icons/search_icon.svg';
import { ReactComponent as CloseIcon } from '../../../icons/close_icon.svg';
import { useTasks } from '../../../hooks';

export function SearchBar() {
  const { handleTaskSearch } = useTasks();
  const [searchTerm, setSearchTerm] = useState('');
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return isInitialMount;
    }
    const handler = setTimeout(() => {
      handleTaskSearch(searchTerm);
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  },
  [searchTerm]);

  return (
    <>
      <SearchContainer>
        <SearchIcon fill="#128069" />
        <input placeholder="I'm looking for..." type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        {searchTerm !== '' && <CloseIcon fill="#128069" onClick={() => setSearchTerm('')} />}
      </SearchContainer>
    </>
  );
}
