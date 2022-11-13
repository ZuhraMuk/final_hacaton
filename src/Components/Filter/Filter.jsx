import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  TextField,
} from "@mui/material";
import React from "react";

const Filter = ({
  category,
  setCategory,
  from,
  setFrom,
  before,
  setBefore,
}) => {
  return (
    <FormControl sx={{ width: "250px", marginLeft: "5px" }}>
      <FormLabel
        id="demo-radio-buttons-group-label"
        sx={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
        Category
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        value={category}
        onChange={e => setCategory(e.target.value)}>
        <FormControlLabel
          value="cartoon"
          control={<Radio />}
          label="Мультфильм"
        />
        <FormControlLabel value="movie" control={<Radio />} label="Кино" />
        <FormControlLabel value="all" control={<Radio />} label="Все" />
      </RadioGroup>
      <FormLabel
        id="demo-radio-buttons-group-label"
        sx={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
        По году выпуска
      </FormLabel>
      {/* <Slider
        getAriaLabel={() => "Temperature range"}
        value={price}
        onChange={e => setPrice(e.target.value)}
        valueLabelDisplay="auto"
        min={0}
        max={200000}
      /> */}
      <span>
        <TextField
          value={from}
          onChange={e => setFrom(e.target.value)}
          sx={{ width: "87px", height: "20px", margin: 2 }}
          id="outlined-number"
          label="От"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          // onChange={e => setPrice(e.target.value)}
        />
        <TextField
          value={before}
          onChange={e => setBefore(e.target.value)}
          sx={{ width: "87px", height: "20px", margin: 2 }}
          id="outlined-number"
          label="ДО"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          // onChange={e => setPrice(e.target.value)}
        />
      </span>
    </FormControl>
  );
};

export default Filter;
