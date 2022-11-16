import React from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import AuthContextProvider from "./context/AuthContextProvider";
import BrowserContextProvider from "./context/BrowserContextProvider";
import ComentContextProvider from "./context/ComentContextProvider";
import FavoritesContextProvider from "./context/FavoritesContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <BrowserContextProvider>
      <ComentContextProvider>
        <AuthContextProvider>
          <FavoritesContextProvider>
            <ProductContextProvider>
              <NavBar />
              <MainRoutes />
              <Footer />
            </ProductContextProvider>
          </FavoritesContextProvider>
        </AuthContextProvider>
      </ComentContextProvider>
    </BrowserContextProvider>
  );
};

export default App;
