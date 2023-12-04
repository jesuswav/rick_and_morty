import React from 'react';
import { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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

  const slides = [
    { url: 'https://i.postimg.cc/dVSrd7s6/banner-copia.png' },
    { url: 'https://i.postimg.cc/L4g0PnqD/banner6.jpg' },
    { url: 'https://i.postimg.cc/ncGDYk4H/banner8.png' },
    { url: 'https://i.postimg.cc/MTF1jbQW/banner13.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Logic for image slider
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

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
    <div className="Appears flex flex-col items-center justify-center pt-24">
      <div className="Appears max-w-[full] h-[320px] max-sm:h-[162px] w-full m-auto py-0 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={prevSlide}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={nextSlide}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="flex top-4 justify-center py-2 opacity-25">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={
                currentIndex === slideIndex
                  ? 'opacity-100 text-xs cursor-pointer'
                  : 'opacity-25 text-xs cursor-pointer'
              }
            >
              ⚪
            </div>
          ))}
        </div>
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
          className="max-sm:w-full h-[315px] w-[560px] max-sm:h-[192px] max-sm:pb-3"
          src="https://www.youtube.com/embed/j9_cxNM3BkI?si=ZIQwjGDthX8iKCv2"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="flex flex-col w-96 px-10 max-sm:w-full max-sm:px-2">
          <h1 className="text-2xl pl-0">New season out now!</h1>
          <span className="text-gray-300 pt-2 text-lg">
            In this new installment, the characters you love will face even
            greater challenges, shocking revelations, and decisions that will
            change the course of their lives. Are you ready for a journey full
            of suspense, intrigue, and action?
          </span>
        </div>
      </div>
      <div className="Appears mx-24 select-none max-sm:mx-2">
        <Slider>
          {showCharacters?.map((item, index) => (
            <Card key={item?.id} data={item}></Card>
          ))}
        </Slider>
      </div>
      {/* Next events */}
      <div className="container mx-auto my-8 max-sm:mx-2 p-8 max-sm:p-2 bg-color-dark-background rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6 ml-20">Upcoming Events</h2>

        <div className="flex flex-wrap gap-4 justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-xs rounded overflow-hidden shadow-lg cursor-pointer hover:scale-110 duration-200">
            <div className="px-6 max-sm:px-2 py-4">
              <div className="flex items-center mb-2">
                <div className="mr-2">
                  <img
                    className="h-8 md:h-10 lg:h-12"
                    src="https://cdn-icons-png.flaticon.com/128/2838/2838558.png"
                    alt="icon"
                  />
                </div>
                <div className="font-bold text-xl">Urban Art Festival</div>
              </div>
              <p className="text-gray-200 text-sm mb-2 font-bold">
                Date: 15/05/2023
              </p>
              <p className="text-gray-200 text-sm mb-4 font-semibold">
                Location: Zócalo, Mexico City
              </p>
              <p className="text-gray-200 text-base">
                Discover creative expression in the heart of the city. This
                urban art festival brings together local and international
                artists to transform Zócalo into an outdoor gallery.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-xs rounded overflow-hidden shadow-lg cursor-pointer hover:scale-110 duration-200">
            <div className="px-6 max-sm:px-2 py-4">
              <div className="flex items-cnter mb-2">
                <div className="mr-2">
                  <img
                    className="h-8 md:h-10 lg:h-12"
                    src="https://cdn-icons-png.flaticon.com/128/2838/2838558.png"
                    alt="icon"
                  />
                </div>
                <div className="font-bold text-xl">Beach Concert</div>
              </div>
              <p className="text-gray-200 text-sm mb-2 font-bold">
                Date: 22/07/2023
              </p>
              <p className="text-gray-200 text-sm mb-4 font-semibold">
                Location: Playa del Carmen, Quintana Roo
              </p>
              <p className="text-gray-200 text-base">
                Enjoy an unforgettable night with live music by the sea. This
                beach concert features local artists and provides the
                opportunity to dance under the stars in a magical setting.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-xs rounded overflow-hidden shadow-lg cursor-pointer hover:scale-110 duration-200">
            <div className="px-6 max-sm:px-2 py-4">
              <div className="flex items-center mb-2">
                <div className="mr-2">
                  <img
                    className="h-8 md:h-10 lg:h-12"
                    src="https://cdn-icons-png.flaticon.com/128/2838/2838558.png"
                    alt="icon"
                  />
                </div>
                <div className="font-bold text-xl">Gastronomic Fair</div>
              </div>
              <p className="text-gray-200 text-sm mb-2 font-bold">
                Date: 10/09/2023
              </p>
              <p className="text-gray-200 text-sm mb-4 font-semibold">
                Location: Paseo de la Reforma, Mexico City
              </p>
              <p className="text-gray-200 text-base">
                Explore culinary diversity at the city's largest gastronomic
                fair. Experience authentic flavors, from traditional dishes to
                innovative creations, while enjoying live music and
                entertainment for the whole family.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
