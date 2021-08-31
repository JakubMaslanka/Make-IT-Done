import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../utilities/assets/search_icon.svg';

function SearchBar() {
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

export default SearchBar;

const SearchContainer = styled.div`
  background-color: #2D3E50;
  border-radius: 10px;
  padding: 5px;
  margin: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  input{
    border: none;
    background: none;
    outline: none;
    color: #CCCCCC;
    font-size: 0.9rem;
    width: 100%;
  }
`;
