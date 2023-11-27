import React from 'react';
import { useState, useEffect } from 'react';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import Slider from '@common/Slider';
import Card from '@components/Card';
import { CardContext } from 'context';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCharacters, setShowCharacters] = useState([]);

  const { start, setStart } = React.useContext(CardContext);
  const { end, setEnd } = React.useContext(CardContext);

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
  }, [characters, fetchedCharacters, loading, error]);

  const setCharactersToShow = () => {
    setShowCharacters(characters.slice(start, end));
  };

  useEffect(() => {
    if (showCharacters && start && end) {
      setCharactersToShow();
    } else if (showCharacters && !start && end) {
      setCharactersToShow();
    }
  }, [characters, start, end]);

  console.log('personajes', showCharacters);

  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <div className="flex w-full h-full mt-2">
        <img
          className="w-full"
          src="https://i.postimg.cc/rpMrnwpk/banner.png"
          alt="Banner"
        ></img>
      </div>
      <div className="p-10 px-28 max-sm:px-5">
        <h2 className="text-3xl mb-5 font-bold">
          Bienvenido a "Rick and Morty Universe"
        </h2>
        <span className="text-xl py-10 text-gray-300">
          Tu fuente definitiva para explorar el vasto multiverso de{' '}
          <span className="font-bold text-gray-100">Rick and Morty</span>. Sumérgete en el caos
          interdimensional mientras exploras detalladas fichas de personajes que
          dan vida a esta hilarante serie animada.
        </span>
      </div>
      <div className="mx-32 select-none max-sm:mx-5">
        <Slider>
          {showCharacters?.map((item) => (
            <Card key={item?.id} data={item}></Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
