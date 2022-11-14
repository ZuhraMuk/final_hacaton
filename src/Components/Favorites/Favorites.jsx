import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { favoritesContext } from "../../context/FavoritesContextProvider";
import ProductCard from "../Products/ProductCard/ProductCard";

const Favorites = () => {
  const { getFavorites, productsInFavorites } = useContext(favoritesContext);

  console.log(productsInFavorites);

  useEffect(() => {
    getFavorites();
  }, []);
  return (
    <>
      <Grid
        id="listProducts"
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        sx={{ width: "70%" }}
        mx="auto"
        my="40px">
        {productsInFavorites
          ? productsInFavorites.products.map(elem => (
              <ProductCard obj={elem.item} />
            ))
          : null}
      </Grid>
    </>
  );
};

export default Favorites;
