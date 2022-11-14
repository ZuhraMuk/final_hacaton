import React, { createContext, useReducer } from "react";

export const favoritesContext = createContext();

function getCountProductsFavorites() {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  return favorites ? favorites.products.length : 0;
}

const INIT_STATE = {
  favorites: JSON.parse(localStorage.getItem("favorites")),
  favoritesCount: getCountProductsFavorites(),
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_FAVORITES":
      return { ...prevState, favorites: action.payload };
    case "CHANGE_FAVORITES_COUNT":
      return { ...prevState, favoritesCount: action.payload };
    default:
      return prevState;
  }
}

const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addProductToFavorites(productObj) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites === null) {
      favorites = {
        products: [],
      };
    }

    let newProduct = {
      item: productObj,
    };

    let filterFavorites = favorites.products.filter(elem => {
      return elem.item.id === productObj.id;
    });

    if (filterFavorites.length > 0) {
      favorites.products = favorites.products.filter(elem => {
        return elem.item.id !== productObj.id;
      });
    } else {
      favorites.products.push(newProduct);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    dispatch({
      type: "CHANGE_FAVORITES_COUNT",
      payload: favorites.products.length,
    });
  }

  async function getFavorites() {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
      };
    }

    dispatch({
      type: "GET_FAVORITES",
      payload: favorites,
    });
  }

  function deleteFavoritesProduct(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    favorites.products = favorites.products.filter(elem => {
      return elem.item.id !== id;
    });

    dispatch({
      type: "CHANGE_FAVORITES_COUNT",
      payload: favorites.products.length,
    });
    localStorage.setItem("favorites", JSON.stringify(favorites));
    getFavorites();
  }

  const cloud = {
    addProductToFavorites,
    getFavorites,
    deleteFavoritesProduct,
    productsInFavorites: state.favorites,
    favoritesCount: state.favoritesCount,
  };
  return (
    <favoritesContext.Provider value={cloud}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
