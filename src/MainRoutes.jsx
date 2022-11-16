import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import Favorites from "./Components/Favorites/Favorites";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";
import ProductsList from "./Components/Products/ProductsList/ProductsList";
import Authorization from "./Components/Auth/Authorization";
import { authContext } from "./context/AuthContextProvider";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import History from "./Components/History/History";

const MainRoutes = () => {
  const { user } = useContext(authContext);
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/auth" element={<Authorization />} />
      <Route
        path="/add"
        element={
          user.email === "zuhra@mail.ru" ? <AddProduct /> : <NotFoundPage />
        }
      />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route
        path="/edit/:id"
        element={
          user.email === "zuhra@mail.ru" ? <EditProduct /> : <NotFoundPage />
        }
      />
      <Route path="/fav" element={<Favorites />} />
      <Route path="/history" element={<History />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
