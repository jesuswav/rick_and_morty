import React from 'react';
import { CardContext } from 'context';

const EpisodeCard = (data, img) => {
  const { openEpisodeModal, setOpenEpisodeModal } = React.useContext(CardContext);
  const { modalData, setModalData } = React.useContext(CardContext);
  return (
    <div
      onClick={() => {
        setOpenEpisodeModal(!openEpisodeModal);
        setModalData(data);
        console.log(data);
      }}
      className="bg-color-fondo-oscuro flex flex-row w-full max-sm:w-11/12 justify-start pl-5 py-4 border-2 rounded-3xl border-solid border-gray-400 cursor-pointer hover:scale-105 duration-200"
    >
      <div>
        <img
          className="h-24 rounded-md"
          src="https://i.postimg.cc/250MMJWP/tocar-1.png"
          alt="EpisodeImg"
        ></img>
      </div>
      <div className="flex flex-col ml-4">
        <p className="font-bold">{data.data.name}</p>
        <p className="text-gray-200">{data.data.air_date}</p>
        <p className="text-gray-400">{data.data.episode}</p>
      </div>
    </div>
  );
};

export default EpisodeCard;
