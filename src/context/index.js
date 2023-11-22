import React from 'react';

const CardContext = React.createContext();

function CardProvider({ children }) {
  console.log('Provider');

  const [openModal, setOpenModal] = React.useState(false);
  const [openEpisodeModal, setOpenEpisodeModal] = React.useState(false);
  const [modalData, setModalData] = React.useState([]);

  return (
    <CardContext.Provider value={{
      openModal,
      setOpenModal,
      modalData,
      setModalData,
      openEpisodeModal,
      setOpenEpisodeModal
    }}>
      {children}
    </CardContext.Provider>
  );
}

export { CardContext, CardProvider };
