import React, { useState, useEffect } from 'react';
import endPoints from '@services/api';
import useFetch from '@hooks/useFetch';
import { CardContext } from 'context';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const { filteredCharacters, setFilteredCharacters } =
    React.useContext(CardContext);
  const { currentPage, setCurrentPage } = React.useContext(CardContext);
  const { notFilterCharacters, setNotFilterCharacters } =
    React.useContext(CardContext);
  const { globalError, setGlobalError } = React.useContext(CardContext);

  const {
    data: fetchedCharacters,
    loading,
    error,
  } = useFetch(`${endPoints.characters}/?name=${searchValue}`);

  useEffect(() => {
    if (!loading && searchValue) {
      setFilteredCharacters(fetchedCharacters.results);
      console.log(fetchedCharacters);
      setGlobalError();
    }
    if (!searchValue) {
      setFilteredCharacters();
      console.log('Filtered characters:', filteredCharacters);
    }
    if (globalError) {
      console.log('Set not filtered characters as true');
      setNotFilterCharacters(true);
    }
    if (!filteredCharacters) {
      console.log('setNotFilteredCharacters as undefined');
      setNotFilterCharacters();
    }
  }, [fetchedCharacters, loading, error, filteredCharacters, searchValue]);

  console.log('Not filtered characters value from Search', notFilterCharacters);

  return (
    <div className="flex flex-row items-center w-full justify-end px-8">
      <input
        className="bg-zinc-500 h-10 p-3 border-none rounded-md w-2/5 max-sm:w-full mx-2"
        placeholder="Filter by name"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      ></input>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
};

export default Search;
