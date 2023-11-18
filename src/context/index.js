import React from 'react';

const CardContext = React.createContext();

function CardProvider({ children }) {
  console.log('Provider');

  const [openModal, setOpenModal] = React.useState(false);
  const [character, setCharacter] = React.useState([]);

  return (
    <CardContext.Provider value={{
      openModal,
      setOpenModal,
      character,
      setCharacter
    }}>
      {children}
    </CardContext.Provider>
  );
}

export { CardContext, CardProvider };
