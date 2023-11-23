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
  }, [fetchedCharacters, loading, error]);

  const setCharactersToShow = () => {
    setShowCharacters(characters.slice(start, end));
  };

  useEffect(() => {
    if (showCharacters && start && end) {
      setCharactersToShow();
    }
  }, [characters, start, end]);

  return (
    <div className="flex flex-col items-center justify-center pt-24">
      <h1>This is the Home component!</h1>
      <div className='mx-32 select-none'>
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
