import { useState, useEffect } from 'react';

const ImageSlider = (characters) => {
  const [showCharacters, setShowCharacters] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  const addCharacters = () => {
    if (end <= characters.characters.length - 1) {
      setStart(start + 1);
      setEnd(end + 1);
    }
  };

  const quitCharacters = () => {
    if (start > 0) {
      console.log('Hola');
      setStart(start - 1);
      setEnd(end - 1);
    }
  };

  const setCharactersToShow = () => {
    setShowCharacters(characters.characters.slice(start, end));
  };

  useEffect(() => {
    if (showCharacters && start && end) {
      setCharactersToShow();
    } else if (showCharacters && !start && end) {
      setCharactersToShow();
    }
  }, [characters, start, end]);

  console.log(characters);
  return (
    <div className="w-full flex flex-row items-center justify-center select-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 cursor-pointer"
        onClick={quitCharacters}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
      <div className="grid grid-cols-3 gap-6 m-0 sm:gap-0 max-lg:grid-cols-3 p-4 lg:px-10 sm:p-0 sm:px-0 sm:flex sm:flex-row justify-center sm:w-full">
        {showCharacters.map((item) => (
          <div key={item.id} className="w-full object-cover">
            <img
              className="rounded-lg max-sm:h-18 h-32 object-cover"
              key={item?.id}
              src={item?.image}
              alt="Image"
            />
            <p className="font-medium text-xs">{item.name}</p>
          </div>
        ))}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 cursor-pointer"
        onClick={addCharacters}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

export default ImageSlider;
