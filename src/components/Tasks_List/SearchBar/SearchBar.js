import React, { useState, useEffect } from 'react';
import { SearchContainer } from './SearchBar.styles';
import { ReactComponent as SearchIcon } from '../../../icons/search_icon.svg';
import { useTasks } from '../../../hooks';

export function SearchBar() {
  const { tasks } = useTasks();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(
    () => {
      const handler = setTimeout(() => {
        // FetchTasksAPI.getTasksByTextSearch(searchTerm)
        //   .then(
        //     (result) => result.length >= 1 && setTask(result),
        //   );
      }, 1000);
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
