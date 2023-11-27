import React, { useEffect } from 'react';

const CardContext = React.createContext();

function CardProvider({ children }) {
  console.log('Provider');

  const [openModal, setOpenModal] = React.useState(false);
  const [openEpisodeModal, setOpenEpisodeModal] = React.useState(false);
  const [modalData, setModalData] = React.useState([]);

  // State for Characters ids in the EpisodeDetail
  const [coincidencias, setCoincidencias] = React.useState([]);

  // States for Slider
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(3);

  var windowHeigth;
  var windowWidth;

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     windowHeigth = window.innerHeight;
  //     windowWidth = window.innerWidth;
  //     if (windowWidth < 1025) {
  //       setEnd(3);
  //       console.log('Hola');
  //     }
  //     if (windowWidth < 639) {
  //       console.log('Hola2');
  //       setEnd(2);
  //     }
  //     if (windowWidth > 1122) {
  //       setEnd(4);
  //     }
  //   });
  // }, [windowHeigth, windowWidth]);

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
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export { CardContext, CardProvider };
