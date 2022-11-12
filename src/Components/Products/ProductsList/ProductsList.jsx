import { Grid } from "@mui/material";
import { margin } from "@mui/system";
import React from "react";
import Filter from "../../Filter/Filter";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";

const ProductsList = () => {
  return (
    <div id="KinoList">
      <div
        id="filter"
        style={{
          width: "250px",
          height: "300px",
          margin: "50px auto",
          border: "2px solid #afc2c2",
          borderRadius: "10px",
          backgroundColor: "#bebfc0c4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}>
        <Filter />
      </div>
      <Grid
        id="listProducts"
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        sx={{ width: "70%" }}
        mx="auto"
        my="40px">
        {/* {productsArr
          ? productsArr.map(item => <ProductCard obj={item} />)
          : null} */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
    </div>
  );
};

export default ProductsList;
