import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { comentContext } from "./ComentContextProvider";

export const productContext = createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: null,
  productDetails: null,
  pageTotalCount: 1,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...prevState,
        products: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 3),
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
  // const { deleteComent } = useContext(comentContext);
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
      const res = await axios(`${API}${location.search}`);
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

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      // deleteComent(id);
      readProduct();
      navigate("/");
    } catch (error) {
      return error;
    }
  }

  async function editProduct(id, editedObj) {
    try {
      await axios.patch(`${API}/${id}`, editedObj);
      readProduct();
      navigate(`/details/${id}`);
    } catch (error) {
      return error;
    }
  }

  const cloud = {
    addProduct,
    readProduct,
    readOneProduct,
    deleteProduct,
    editProduct,
    productsArr: state.products,
    productDetails: state.productDetails,
    pageTotalCount: state.pageTotalCount,
  };
  return (
    <productContext.Provider value={cloud}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;

// import React, { createContext, useReducer } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   addDoc,
//   collection,
//   deleteDoc,
//   doc,
//   getDoc,
//   getDocs,
//   getFirestore,
//   updateDoc,
// } from "firebase/firestore";
// import fire from "../fire";

// export const productContext = createContext();

// const INIT_STATE = {
//   products: null,
//   productDetails: null,
//   pageTotalCount: 1,
// };

// function reducer(prevState, action) {
//   switch (action.type) {
//     case "GET_PRODUCT":
//       return {
//         ...prevState,
//         products: action.payload,
//         // pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 3),
//       };
//     case "GET_ONE_PRODUCT":
//       return { ...prevState, productDetails: action.payload };
//     default:
//       return prevState;
//   }
// }

// const ProductContextProvider = props => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);
//   const location = useLocation();

//   const navigate = useNavigate();

//   const db = getFirestore(fire);

//   async function addProduct(newProduct) {
//     try {
//       await addDoc(collection(db, "products"), newProduct);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function readProduct() {
//     try {
//       const { docs } = await getDocs(collection(db, "products"));
//       const data = docs.map(item => {
//         return { ...item.data(), id: item.id };
//       });
//       dispatch({
//         type: "GET_PRODUCT",
//         payload: data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function readOneProduct(id) {
//     try {
//       const oneDoc = doc(db, "products", id);
//       const data = await getDoc(oneDoc);
//       let obj = { ...data.data(), id: data.id };
//       dispatch({
//         type: "GET_ONE_PRODUCT",
//         payload: obj,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function deleteProduct(id) {
//     try {
//       let oneDoc = doc(db, "products", id);
//       await deleteDoc(oneDoc);
//       readProduct();
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function editProduct(id, editedObj) {
//     try {
//       let oneDoc = doc(db, "products", id);
//       await updateDoc(oneDoc, editedObj);
//       readProduct();

//       navigate(`/details/${id}`);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   let cloud = {
//     addProduct,
//     readProduct,
//     readOneProduct,
//     deleteProduct,
//     editProduct,
//     productsArr: state.products,
//     productDetails: state.productDetails,
//     pageTotalCount: state.pageTotalCount,
//   };
//   return (
//     <productContext.Provider value={cloud}>
//       {props.children}
//     </productContext.Provider>
//   );
// };

// export default ProductContextProvider;
