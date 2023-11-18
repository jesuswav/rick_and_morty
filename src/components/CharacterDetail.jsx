import React from 'react';
import { CardContext } from 'context';

const CharacterDetail = (data) => {
  const { openModal, setOpenModal } = React.useContext(CardContext);
  const { character, setCharacter } = React.useContext(CardContext);

  return (
    <div className="bg-opacity-75 bg-black top-0 left-0 right-0 bottom-0 absolute flex items-center justify-center">
      <div className="rounded-lg w-3/4 h-3/4 opacity-100 flex flex-col bg-color-fondo-oscuro">
        <div className="flex w-full justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 relative -top-2 -right-2 cursor-pointer"
            onClick={(event) => {
              setOpenModal(!openModal);
              console.log(openModal);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="w-full h-full flex flex-col items-center">
          <div className="top-0 flex justify-center items-center w-full">
            <h1 className="font-bold text-2xl m-5">Character Detail!</h1>
          </div>
          <div className="flex flex-row w-full ml-36 justify-start max-sm:flex-col">
            <div className="p-4 pr-5">
              <img
                className="rounded-lg max-sm:h-32"
                src={character.data.image}
                alt="img"
              />
            </div>
            <div className="text-xl max-sm:text-sm max-sm:p-4">
              <span className="flex flex-row pt-5">
                <p className="font-bold pr-1">Nombre:</p>
                <p className="text-gray-300">{character.data.name}</p>
              </span>
              <span className="flex flex-row pt-5">
                <p className="font-bold pr-1">Genero:</p>
                <p className="text-gray-300">{character.data.gender}</p>
              </span>
              <span className="flex flex-row pt-5">
                <p className="font-bold pr-1">Locación:</p>
                <p className="text-gray-300">{character.data.location.name}</p>
              </span>
              <span className="flex flex-row pt-5">
                <p className="font-bold pr-1">Origen:</p>
                <p className="text-gray-300">{character.data.origin.name}</p>
              </span>
              <span className="flex flex-row pt-5">
                <p className="font-bold pr-1">Status:</p>
                <p
                  className={
                    character.data.status === 'Alive'
                      ? 'text-green-400'
                      : 'text-red-600'
                  }
                >
                  {character.data.status}
                </p>
              </span>
              <span className="flex flex-row pt-5">
                <p className="font-bold pr-1">Aparece en:</p>
                <p className="text-gray-300">{character.data.episode.length} Episodios</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
