import React, { useContext, useEffect, useState } from "react";
import "./ProductDetails.css";
import ReactPlayer from "react-player/lazy";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Button, IconButton, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import DeleteIcon from "@mui/icons-material/Delete";
import { productContext } from "../../../context/ProductContextProvider";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { favoritesContext } from "../../../context/FavoritesContextProvider";
import { authContext } from "../../../context/AuthContextProvider";
import { comentContext } from "../../../context/ComentContextProvider";
import SendIcon from "@mui/icons-material/Send";
import { browserContext } from "../../../context/BrowserContextProvider";
import RestoreIcon from "@mui/icons-material/Restore";
import ProductCard from "../ProductCard/ProductCard";

const ProductDetails = () => {
  const { readOneProduct, productDetails, deleteProduct, productsArr } =
    useContext(productContext);

  console.log(productsArr);

  const location = useLocation();

  const { user } = useContext(authContext);

  const { addProductToFavorites } = useContext(favoritesContext);

  const { deleteHistoryProduct } = useContext(browserContext);

  const { addComent, readComent, comentArr, deleteComent } =
    useContext(comentContext);
  const [coment, setComent] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (!user.email) {
      alert("Чтобы оставить коментарий войдите через акаунт!");
      return;
    }
    if (!coment.trim()) {
      alert("Заполните поле!");
      return;
    }

    let obj = {
      coment,
      key: id,
      user: user.email,
    };
    addComent(obj);
    setComent("");
  }

  useEffect(() => {
    readComent();
  }, []);

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

  const [history, setHistory] = useState(false);

  useEffect(() => {
    let history = JSON.parse(localStorage.getItem("history"));
    if (history !== null) {
      if (productDetails !== null) {
        history.products.forEach(elem => {
          if (elem.item.id === productDetails.id) {
            setHistory(true);
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

              {history ? (
                <IconButton
                  style={{ color: "yellow" }}
                  id="deleteFav"
                  onClick={() => {
                    setHistory(false);
                    deleteHistoryProduct(productDetails.id);
                  }}>
                  <RestoreIcon />
                </IconButton>
              ) : (
                <IconButton
                  style={{ color: "inherit" }}
                  id="deleteFav"
                  onClick={() => {
                    setHistory(false);
                    deleteHistoryProduct(productDetails.id);
                  }}>
                  <RestoreIcon />
                </IconButton>
              )}
            </div>
          </div>
          <Typography variant="h6" style={{ margin: "5px auto" }}>
            Рекомендации
          </Typography>
          <div
            style={{
              width: "80%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "5px auto",
            }}>
            {productsArr
              ? productsArr.map(item => {
                  if (
                    item.category == productDetails.category &&
                    item.year == productDetails.year &&
                    item.id !== productDetails.id
                  ) {
                    return <ProductCard obj={item} />;
                  }
                })
              : null}
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
              <form onSubmit={e => handleAdd(e)}>
                <label style={{ fontSize: "18px" }}>
                  Оставить отзыв:
                  <input
                    onChange={e => setComent(e.target.value)}
                    type="text"
                    value={coment}
                    style={{
                      width: "40%",
                      height: "20px",
                      backgroundColor: "rgb(222, 220, 220)",
                      borderRadius: "5px",
                      outline: 0,
                    }}
                  />
                </label>
                <IconButton type="submit">
                  <SendIcon />
                </IconButton>
              </form>
            </div>
            {comentArr
              ? comentArr.map(item => {
                  if (item.key == id) {
                    return (
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
                          {item.user[0].toUpperCase("")}
                        </div>
                        <div
                          style={{ display: "flex", flexDirection: "column" }}>
                          <span>{item.user}</span>
                          <span>
                            {item.coment}
                            <IconButton onClick={() => deleteComent(item.id)}>
                              <DeleteIcon />
                            </IconButton>
                          </span>
                        </div>
                      </div>
                    );
                  }
                })
              : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductDetails;
