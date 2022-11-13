import React, { useContext, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";
import "./AddProduct.css";
import { productContext } from "../../../context/ProductContextProvider";

const AddProduct = () => {
  const { addProduct, productsArr } = useContext(productContext);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState(0);
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [img1, setImg1] = useState("");
  const [video, setVideo] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (
      !category.trim() ||
      !title.trim() ||
      !genre.trim() ||
      !year ||
      !rating.trim() ||
      !description.trim() ||
      !img1.trim() ||
      !video.trim()
    ) {
      alert("Fill in all the fields!");
      return;
    }

    let obj = {
      category,
      title,
      genre,
      year: +year,
      rating,
      description,
      img1,
      video,
    };
    addProduct(obj);
    setCategory("");
    setTitle("");
    setGenre("");
    setYear(0);
    setRating("");
    setDescription("");
    setImg1("");
    setVideo("");
  }

  return (
    <>
      <h2 id="add-title">Добавить продукт</h2>
      <form
        id="form-add"
        onSubmit={e => handleAdd(e)}
        style={{ minWidth: "300px", backgroundColor: "#bebfc0c4" }}>
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Категория
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={category}
            onChange={e => setCategory(e.target.value)}
            autoWidth
            label="Category">
            <MenuItem value="cartoon">Мультфильм</MenuItem>
            <MenuItem value="movie">Кино</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className="outlined-basic"
          label="Название"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Жанр"
          variant="outlined"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />
        <TextField
          type="number"
          className="outlined-basic"
          label="Год"
          variant="outlined"
          value={year}
          onChange={e => setYear(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Рейтинг"
          variant="outlined"
          value={rating}
          onChange={e => setRating(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Описание"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Фото"
          variant="outlined"
          value={img1}
          onChange={e => setImg1(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Видео"
          variant="outlined"
          value={video}
          onChange={e => setVideo(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Добавить
        </Button>
      </form>
    </>
  );
};

export default AddProduct;
