import { Grid, Pagination } from "@mui/material";
import { margin } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productContext } from "../../../context/ProductContextProvider";
import Filter from "../../Filter/Filter";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";

const ProductsList = () => {
  const { productsArr, readProduct, pageTotalCount } =
    useContext(productContext);

  const [paramsSearch, setParamsSearch] = useSearchParams();
  const [category, setCategory] = useState("all");
  const [from, setFrom] = useState(1990);
  const [before, setBefore] = useState(5000);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (category === "all") {
      setParamsSearch({
        year_gte: from,
        year_lte: before,
        q: paramsSearch.get("q") || "",
        _page: page,
        _limit: 3,
      });
    } else {
      setParamsSearch({
        category: category,
        year_gte: from,
        year_lte: before,
        q: paramsSearch.get("q") || "",
        _page: page,
        _limit: 3,
      });
    }
  }, [paramsSearch, category, from, before, page]);

  useEffect(() => {
    readProduct();
  }, [paramsSearch, pageTotalCount]);

  return (
    <>
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
          <Filter
            category={category}
            setCategory={setCategory}
            from={from}
            setFrom={setFrom}
            before={before}
            setBefore={setBefore}
          />
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
          {productsArr
            ? productsArr.map(item => <ProductCard obj={item} />)
            : null}
        </Grid>
      </div>
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          color: "white",
        }}
        mx="auto"
        my="20px">
        <Pagination
          sx={{ backgroundColor: "#ababab51", borderRadius: "5px" }}
          count={+pageTotalCount}
          color="secondary"
          page={+page}
          onChange={(e, value) => setPage(value)}
        />
      </Grid>
    </>
  );
};

export default ProductsList;
