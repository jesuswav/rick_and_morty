import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { CardContext } from 'context';

const Slider = ({ children }) => {
  const router = useRouter();
  const { start, setStart } = React.useContext(CardContext);
  const { end, setEnd } = React.useContext(CardContext);

  const addCharacters = () => {
    if (end < 20) {
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

  return (
    <div className="flex flex-col justify-center pt-5">
      <div
        onClick={() => router.push('/home/characters')}
        className="flex flex-row items-center cursor-pointer"
      >
        <h1 className="text-2xl">Characters</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div className="flex flex-row items-center">
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

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 p-4 px-10 max-sm:flex flex-col max-sm:p-5 items-center max-sm:w-full">
          {children}
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
    </div>
  );
};

export default Slider;
