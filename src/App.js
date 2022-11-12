import React from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";
import ProductsList from "./Components/Products/ProductsList/ProductsList";

const App = () => {
  return (
    <>
      <NavBar />
      {/* <ProductsList /> */}
      <ProductDetails />
      <Footer />
    </>
  );
};

export default App;
