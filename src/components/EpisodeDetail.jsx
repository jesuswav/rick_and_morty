import React from 'react';
import { CardContext } from 'context';

const EpisodeDetail = () => {
  const { openEpisodeModal, setOpenEpisodeModal } = React.useContext(CardContext);
  const { modalData, setModalData } = React.useContext(CardContext);

  return (
    <div className="bg-opacity-75 bg-black top-0 left-0 right-0 bottom-0 absolute flex items-center justify-center pt-12">
      <div className="rounded-xl w-3/4 h-3/4 max-sm:w-10/12 max-sm:h-5/6 opacity-100 flex flex-col justify-center items-center bg-color-fondo-oscuro p-4">
        {/* XMarkIcon */}
        <div className="flex w-full justify-end z-10 items-center">
          <div className=" relative flex justify-center items-center w-full">
            <h1 className="font-bold text-2xl">Character Detail!</h1>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 relative -top-2 -right-2 cursor-pointer"
            onClick={(event) => {
              setOpenEpisodeModal(!openEpisodeModal);
              console.log(modalData);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        {/* Content */}
        <div className="w-full h-full flex flex-col items-center">
          {/* Info from API */}
          <div className="flex flex-row w-full justify-evenly max-sm:justify-center items-center h-full max-sm:flex-col">
            <div className="m-2">
              <img
                className="rounded-lg"
                src="https://i.postimg.cc/250MMJWP/tocar-1.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetail;
