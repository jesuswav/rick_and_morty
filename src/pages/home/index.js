import React from 'react';
import { useState, useEffect } from 'react';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import Slider from '@common/Slider';
import Card from '@components/Card';
import Footer from '@common/Footer';
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
        <h2 className="text-4xl mb-5 font-bold">
          Welcome to "Rick and Morty Universe"
        </h2>
        <span className="text-xl py-10 text-gray-300">
          Your definitive source for exploring the vast
          <span className="font-bold text-gray-100"> Rick and Morty </span>.
          multiverse. Immerse yourself in interdimensional chaos as you explore
          detailed character sheets that bring this hilarious animated series to
          life.
        </span>
      </div>
      <div className="flex w-full justify-center max-sm:flex-col max-sm:p-10">
        <iframe
          className="max-sm:w-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/j9_cxNM3BkI?si=ZIQwjGDthX8iKCv2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="flex flex-col w-96 px-10 max-sm:w-full max-sm:px-2">
          <h1 className="text-2xl pl-0">New season out now!</h1>
          <span className="text-gray-300 pt-2 text-lg">
            En esta nueva entrega, los personajes que amas enfrentarán desafíos
            aún mayores, revelaciones impactantes y decisiones que cambiarán el
            rumbo de sus vidas. ¿Estás listo para un viaje lleno de suspense,
            intriga y acción?
          </span>
        </div>
      </div>
      <div className="mx-44 select-none max-sm:mx-5">
        <Slider>
          {showCharacters?.map((item) => (
            <Card key={item?.id} data={item}></Card>
          ))}
        </Slider>
      </div>
      <div className="w-full mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
