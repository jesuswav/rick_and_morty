import React, { useEffect, useState } from 'react';
import Card from '@components/Card';
import Paginate from '@components/Paginate';
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
      setCharacters(fetchedCharacters);
      console.log(characters);
    }
  }, [fetchedCharacters, loading, error]);

  return (
    <div>
      <div className="flex h-10 items-center justify-center w-full pt-32 max-sm:pt-32">
        <Paginate
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Paginate>
      </div>
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 p-10 max-sm:flex flex-col max-sm:p-5 items-center w-full">
        {characters.map((item) => (
          <Card key={item?.id} data={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Caracters;
