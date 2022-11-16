import React, { createContext, useReducer } from "react";

export const browserContext = createContext();

const INIT_STATE = {
  history: JSON.parse(localStorage.getItem("history")),
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_HISTORY":
      return { ...prevState, history: action.payload };
    default:
      return prevState;
  }
}

const BrowserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addProductToHistory(productObj) {
    let history = JSON.parse(localStorage.getItem("history"));
    if (history === null) {
      history = {
        products: [],
      };
    }

    let newProduct = {
      item: productObj,
    };

    let filterHistory = history.products.filter(elem => {
      return elem.item.id === productObj.id;
    });

    if (filterHistory.length > 0) {
      history.products = history.products.filter(elem => {
        return elem.item.id !== productObj.id;
      });
      history.products.push(newProduct);
    } else {
      history.products.push(newProduct);
    }

    localStorage.setItem("history", JSON.stringify(history));
  }

  async function getHistory() {
    let history = JSON.parse(localStorage.getItem("history"));
    if (!history) {
      history = {
        products: [],
      };
    }

    dispatch({
      type: "GET_HISTORY",
      payload: history,
    });
  }

  const cloud = {
    addProductToHistory,
    getHistory,
    historyInArr: state.history,
  };
  return (
    <browserContext.Provider value={cloud}>{children}</browserContext.Provider>
  );
};

export default BrowserContextProvider;
