import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { browserContext } from "../../context/BrowserContextProvider";
import ProductCard from "../Products/ProductCard/ProductCard";

const History = () => {
  const { getHistory, historyInArr } = useContext(browserContext);

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <>
      <Grid
        id="listProducts"
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        sx={{ width: "90%", minHeight: "240px" }}
        mx="auto"
        my="40px">
        {historyInArr.products
          ? historyInArr.products.map(elem => <ProductCard obj={elem.item} />)
          : null}
      </Grid>
    </>
  );
};

export default History;
