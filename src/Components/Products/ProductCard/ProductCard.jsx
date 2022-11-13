import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ obj }) => {
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
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
