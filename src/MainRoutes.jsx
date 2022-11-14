import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import Favorites from "./Components/Favorites/Favorites";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";
import ProductsList from "./Components/Products/ProductsList/ProductsList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/fav" element={<Favorites />} />
    </Routes>
  );
};

export default MainRoutes;
