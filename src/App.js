import React from "react";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";
import ProductsList from "./Components/Products/ProductsList/ProductsList";
import FavoritesContextProvider from "./context/FavoritesContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <FavoritesContextProvider>
      <ProductContextProvider>
        <NavBar />
        <MainRoutes />
        {/* <ProductDetails /> */}
        {/* <AddProduct />
      <EditProduct /> */}
        <Footer />
      </ProductContextProvider>
    </FavoritesContextProvider>
  );
};

export default App;
