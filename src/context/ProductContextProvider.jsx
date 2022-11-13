import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const productContext = createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: null,
  productDetails: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...prevState,
        product: action.payload.data,
        // pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 9),
      };
    case "GET_ONE_PRODUCT":
      return {
        ...prevState,
        productDetails: action.payload,
      };
    default:
      return prevState;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();

  const navigate = useNavigate();

  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      return error;
    }
  }

  async function readProduct() {
    try {
      const res = await axios(API);
      dispatch({
        type: "GET_PRODUCT",
        payload: res,
      });
    } catch (error) {
      return error;
    }
  }

  async function readOneProduct(id) {
    try {
      const { data } = await axios(`${API}/${id}`);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: data,
      });
    } catch (error) {
      return error;
    }
  }

  const cloud = {
    addProduct,
    readProduct,
    readOneProduct,
    productsArr: state.product,
    productDetails: state.productDetails,
  };
  return (
    <productContext.Provider value={cloud}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
