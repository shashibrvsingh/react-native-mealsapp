import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouriteContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavourite(id) {
    setFavouriteMealIds((currentFavouriteIds) => [...currentFavouriteIds, id]);
  }

  function removeFavourite() {
    setFavouriteMealIds((currentFavouriteIds) =>
      currentFavouriteIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouriteContextProvider;
