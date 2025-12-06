import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function addFavorite(id) {
    setFavoriteIds((currentFavoriteIds) => {
      return [...currentFavoriteIds, id];
    });
  }

  function removeFavorite(id) {
    setFavoriteIds((currentFavoriteIds) => {
      return currentFavoriteIds.filter((favoriteId) => favoriteId !== id);
    });
  }

  const value = {
    ids: favoriteIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
