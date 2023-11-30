import React, { useEffect, useState } from 'react';
import Card from '@components/Card';
import Paginate from '@components/Paginate';
import Search from '@components/Search';
import Footer from '@common/Footer';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import { CardContext } from 'context';

const Caracters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { filteredCharacters, setFilteredCharacters } =
    React.useContext(CardContext);
  const { notFilterCharacters, setNotFilterCharacters } =
    React.useContext(CardContext);

  const {
    data: fetchedCharacters,
    loading,
    error,
  } = useFetch(endPoints.characters, currentPage);

  useEffect(() => {
    if (!loading && !error) {
      setCharacters(fetchedCharacters.results);
      console.log(characters);
    }
  }, [fetchedCharacters, loading, error]);

  console.log('Not filtered characters value', notFilterCharacters);

  return (
    <div className="mt-24 max-sm:mt-24 max-sm:px-0 w-full">
      <div className="flex items-center justify-center w-full">
        <Search></Search>
      </div>
      {notFilterCharacters && (
        <div className="flex justify-center items-center w-full h-full pt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          <span className="text-xl">Sorry, no characters match the search</span>
        </div>
      )}
      <div className="grid grid-cols-3 pt-8 gap-6 max-lg:grid-cols-2 p-4 px-10 max-sm:flex flex-col max-sm:p-5 items-center max-sm:w-full">
        {!filteredCharacters &&
          characters.map((item) => <Card key={item?.id} data={item}></Card>)}
        {filteredCharacters &&
          !notFilterCharacters &&
          filteredCharacters?.map((item) => (
            <Card key={item?.id} data={item}></Card>
          ))}
        {/* {fil.map((item) => <Card key={item?.id} data={item}></Card>)} */}
      </div>
      <div className="flex pt-10 h-10 items-center justify-center w-full">
        <Paginate
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pages={fetchedCharacters.info?.pages}
        ></Paginate>
      </div>
      <div className="w-full mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Caracters;
