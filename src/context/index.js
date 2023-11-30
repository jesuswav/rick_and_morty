import React, { useEffect } from 'react';

const CardContext = React.createContext();

function CardProvider({ children }) {
  const [openModal, setOpenModal] = React.useState(false);
  const [openEpisodeModal, setOpenEpisodeModal] = React.useState(false);
  const [modalData, setModalData] = React.useState([]);

  // State for Characters ids in the EpisodeDetail
  const [coincidencias, setCoincidencias] = React.useState([]);

  // States for Slider
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(3);

  // Satate for filtered characters
  const [filteredCharacters, setFilteredCharacters] = React.useState([]);
  // State for not searched characters
  const [notFilterCharacters, setNotFilterCharacters] = React.useState();

  // State for global error
  const [globalError, setGlobalError] = React.useState(null);

  return (
    <CardContext.Provider
      value={{
        openModal,
        setOpenModal,
        modalData,
        setModalData,
        openEpisodeModal,
        setOpenEpisodeModal,
        coincidencias,
        setCoincidencias,
        start,
        setStart,
        end,
        setEnd,
        filteredCharacters,
        setFilteredCharacters,
        notFilterCharacters,
        setNotFilterCharacters,
        globalError,
        setGlobalError,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export { CardContext, CardProvider };
