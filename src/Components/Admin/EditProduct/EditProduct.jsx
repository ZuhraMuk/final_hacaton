import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./EditProduct.css";
import { useNavigate, useParams } from "react-router-dom";
// import { productContext } from "../../../context/ProductContextProvider";

const EditProduct = () => {
  // const { productDetails, readOneProduct, editProduct } =
  //   useContext(productContext);
  const [inpValues, setInpValues] = useState("");

  const { id } = useParams();

  // useEffect(() => {
  //   readOneProduct(id);
  // }, [id]);

  function handleChange(e) {
    let obj = {};
    if (e.target.name == "year") {
      obj = {
        ...inpValues,
        [e.target.name]: +e.target.value,
      };
    } else {
      obj = {
        ...inpValues,
        [e.target.name]: e.target.value,
      };
    }
    setInpValues(obj);
  }

  // const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault();
    if (
      !inpValues.category.trim() ||
      !inpValues.title.trim() ||
      !inpValues.genre.trim() ||
      !inpValues.year ||
      !inpValues.rating.trim() ||
      !inpValues.description.trim() ||
      !inpValues.img1.trim() ||
      !inpValues.video.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    // editProduct(id, inpValues);
    // navigate("/list");
  }

  return (
    <>
      <h2 id="add-title">Изменить продукт</h2>
      <form
        id="form-add"
        onSubmit={e => handleSave(e)}
        style={{ minWidth: "280px", backgroundColor: "#bebfc0c4" }}>
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Категория
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            name="category"
            value={inpValues.category}
            onChange={e => handleChange(e)}
            autoWidth
            label="Категория">
            <MenuItem value="cartoon">Мультфильм</MenuItem>
            <MenuItem value="movie">Кино</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className="outlined-basic"
          label="Название"
          variant="outlined"
          name="title"
          value={inpValues.title}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Жанр"
          variant="outlined"
          name="genre"
          value={inpValues.genre}
          onChange={e => handleChange(e)}
        />
        <TextField
          type="number"
          className="outlined-basic"
          label="Год"
          variant="outlined"
          name="year"
          value={inpValues.year}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Рейтинг"
          variant="outlined"
          name="rating"
          value={inpValues.rating}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Описание"
          variant="outlined"
          name="description"
          value={inpValues.description}
          onChange={e => handleChange(e)}
        />

        <TextField
          className="outlined-basic"
          label="Фото"
          variant="outlined"
          name="img1"
          value={inpValues.img1}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Видео"
          variant="outlined"
          name="video"
          value={inpValues.video}
          onChange={e => handleChange(e)}
        />
        <Button variant="contained" type="submit">
          Сохранить
        </Button>
      </form>
    </>
  );
};

export default EditProduct;
