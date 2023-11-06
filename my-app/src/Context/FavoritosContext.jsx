import React, { createContext, useState, useEffect } from 'react';

export const FavoritosContext = createContext();

const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(() => JSON.parse(localStorage.getItem('favoritos')) || []);

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  return (
    <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;
