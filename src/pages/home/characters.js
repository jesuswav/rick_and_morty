import React, { useEffect, useState } from 'react';
import Card from '@components/Card';
import Paginate from '@components/Paginate';
import Search from '@components/Search';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';

const Caracters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  return (
    <div className="pt-24 max-sm:pt-24 p-10">
      <div className='flex items-center justify-center w-full'>
        <Search></Search>
      </div>
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 p-4 px-10 max-sm:flex flex-col max-sm:p-5 items-center w-full">
        {characters.map((item) => (
          <Card key={item?.id} data={item}></Card>
        ))}
      </div>
      <div className="flex pt-10 h-10 items-center justify-center w-full">
        <Paginate
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pages={fetchedCharacters.info?.pages}
        ></Paginate>
      </div>
    </div>
  );
};

export default Caracters;
