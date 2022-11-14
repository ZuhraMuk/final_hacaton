import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ProductCard.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";
import { favoritesContext } from "../../../context/FavoritesContextProvider";

const ProductCard = ({ obj }) => {
  const location = useLocation();
  const { deleteFavoritesProduct } = useContext(favoritesContext);
  return (
    <Link to={`/details/${obj.id}`}>
      <div
        style={{
          width: 250,
          height: 280,
          margin: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "5px",
          cursor: "pointer",
          color: "#e3e6e9",
          backgroundColor: "#6c6d6d8a",
        }}
        className="card_active">
        <img
          src={obj.img1}
          alt={obj.title}
          style={{ width: "100%", height: "250px", borderRadius: "5px" }}
        />
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "17px",
            fontWeight: "300",
          }}
          className="cardText">
          {obj.title}
          {location.pathname === "/fav" ? (
            <IconButton
              id="deleteFav"
              onClick={() => deleteFavoritesProduct(obj.id)}>
              <DeleteForeverIcon />
            </IconButton>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
