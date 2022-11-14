import React, { useContext, useEffect, useState } from "react";
import "./ProductDetails.css";
import ReactPlayer from "react-player/lazy";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import DeleteIcon from "@mui/icons-material/Delete";
import { productContext } from "../../../context/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { favoritesContext } from "../../../context/FavoritesContextProvider";
import { authContext } from "../../../context/AuthContextProvider";

const ProductDetails = () => {
  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);

  const { user } = useContext(authContext);

  const { addProductToFavorites } = useContext(favoritesContext);

  const [basket, setBasket] = useState(false);

  useEffect(() => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites !== null) {
      if (productDetails !== null) {
        favorites.products.forEach(elem => {
          if (elem.item.id === productDetails.id) {
            setBasket(true);
          }
        });
      }
    }
  }, []);

  const { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  const navigate = useNavigate();

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
            {/* <ReactPlayer
              width="100%"
              height="89.7%"
              url={productDetails.video}
              controls={true}></ReactPlayer> */}
            {/* {productDetails.video} */}
            <div
              id="pleer"
              dangerouslySetInnerHTML={{
                __html: `${productDetails.video}`,
              }}></div>

            <div
              style={{
                width: "20%",
                height: "10%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}>
              {basket ? (
                <IconButton
                  style={{ color: "rgb(182 180 231)" }}
                  onClick={() => {
                    addProductToFavorites(productDetails);
                    setBasket(!basket);
                  }}>
                  <BookmarkIcon style={{ color: "green" }} />
                </IconButton>
              ) : (
                <IconButton
                  style={{ color: "rgb(182 180 231)" }}
                  onClick={() => {
                    addProductToFavorites(productDetails);
                    setBasket(!basket);
                  }}>
                  <BookmarkIcon style={{ color: "inherit" }} />
                </IconButton>
              )}

              <IconButton style={{ color: "rgb(182 180 231)" }}>
                <ChatIcon />
              </IconButton>
            </div>
          </div>
          {user.email === "zuhra@mail.ru" ? (
            <div
              style={{
                width: "90%",
                height: "50px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}>
              <button
                onClick={() => deleteProduct(productDetails.id)}
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
                onClick={() => navigate(`/edit/${productDetails.id}`)}
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
          ) : null}
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
