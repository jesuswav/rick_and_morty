import React from 'react';

const CardContext = React.createContext();

function CardProvider({ children }) {
  console.log('Provider');

  const [openModal, setOpenModal] = React.useState(false);
  const [openEpisodeModal, setOpenEpisodeModal] = React.useState(false);
  const [modalData, setModalData] = React.useState([]);

  // States for Slider
  const [start, setStart] = React.useState(1);
  const [end, setEnd] = React.useState(4);

  return (
    <CardContext.Provider value={{
      openModal,
      setOpenModal,
      modalData,
      setModalData,
      openEpisodeModal,
      setOpenEpisodeModal,
      start,
      setStart,
      end,
      setEnd
    }}>
      {children}
    </CardContext.Provider>
  );
}

export { CardContext, CardProvider };
