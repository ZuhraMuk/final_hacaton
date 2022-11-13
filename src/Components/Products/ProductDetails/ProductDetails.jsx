import React, { useContext, useEffect } from "react";
import "./ProductDetails.css";
import ReactPlayer from "react-player/lazy";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import DeleteIcon from "@mui/icons-material/Delete";
import { display } from "@mui/system";
import { productContext } from "../../../context/ProductContextProvider";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { readOneProduct, productDetails } = useContext(productContext);

  const { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  return (
    <>
      {productDetails ? (
        <div id="watchList">
          <div
            style={{
              fontSize: "23px",
              marginLeft: "10px",
            }}>
            {productDetails.title}
          </div>
          <hr width="99%" />
          <div id="details">
            <span>Жанр: {productDetails.genre}</span>
            <span>Год выпуска: {productDetails.year}</span>
            <span>Возрастной рейтинг: {productDetails.rating}+</span>
          </div>
          <div id="description">{productDetails.description}</div>
          <div id="video">
            <ReactPlayer
              width="100%"
              height="90%"
              url={productDetails.video}
              controls={true}></ReactPlayer>
            <div
              style={{
                width: "20%",
                height: "10%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}>
              <IconButton style={{ color: "rgb(182 180 231)" }}>
                <FavoriteIcon />
              </IconButton>
              <IconButton style={{ color: "rgb(182 180 231)" }}>
                <ChatIcon />
              </IconButton>
            </div>
          </div>
          <div
            style={{
              width: "90%",
              height: "50px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}>
            <button
              style={{
                width: "40%",
                border: "none",
                borderRadius: "5px",
                height: "30px",
                backgroundColor: "#e60909e1",
                cursor: "pointer",
              }}>
              Удалить
            </button>
            <button
              style={{
                width: "40%",
                border: "none",
                borderRadius: "5px",
                height: "30px",
                backgroundColor: "#05a805",
                cursor: "pointer",
              }}>
              Редактировать
            </button>
          </div>
          <div id="commit">
            <div style={{ marginBottom: "10px" }}>
              <label style={{ fontSize: "20px" }}>
                Оставить отзыв:{" "}
                <input
                  type="text"
                  style={{
                    width: "40%",
                    height: "20px",
                    backgroundColor: "rgb(222, 220, 220)",
                    borderRadius: "5px",
                    outline: 0,
                  }}
                />
              </label>
            </div>

            <div style={{ display: "flex", marginBottom: "10px" }}>
              <div
                style={{
                  minWidth: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "rgb(182 180 231)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "black",
                  marginRight: "3px",
                }}>
                Z
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>zmu3842@gmail.ru</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  amet iusto harum illo, sit veniam. Earum neque sint doloribus
                  ut dignissimos, labore fugit sapiente consequuntur tenetur.
                  Pariatur, cumque repudiandae? Accusamus?
                  <IconButton>
                    <DeleteIcon />{" "}
                  </IconButton>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductDetails;
