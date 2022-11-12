import React from "react";
import "./ProductDetails.css";
import ReactPlayer from "react-player";

const ProductDetails = () => {
  return (
    <div id="watchList">
      <div style={{ fontSize: "21px", marginLeft: "10px" }}>
        Как приручить дракона
      </div>
      <div id="details">
        <span>Жанр: фантастика</span>
        <span>Год выпуска: 2017</span>
        <span>Возрастной рейтинг: 13+</span>
      </div>
      <div id="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        impedit atque enim perspiciatis laborum, illum nihil quam veritatis
        omnis blanditiis mollitia dolorem consequatur molestias aperiam
        recusandae aspernatur quos distinctio architecto deserunt eos, libero
        iste ipsum. Vero ducimus tempora facilis sunt laudantium dicta omnis.
        Alias dolore autem voluptas repudiandae debitis et aliquam provident
        odio, ut deserunt iusto, sed aperiam explicabo odit quaerat praesentium
        quis fugit quia adipisci, recusandae dignissimos necessitatibus earum
        labore laboriosam. At reprehenderit doloremque dignissimos accusamus
        ducimus ipsam soluta obcaecati ea veniam minima! Assumenda maxime ipsum,
        earum debitis tempore nostrum culpa iure esse corrupti nam alias ut
        facilis. Illo.
      </div>
      <div id="video">
        <ReactPlayer
          width="100%"
          height="90%"
          url="https://youtu.be/E4u9sXUCfww?list=PLhm-K_N8U4xSPiQ209wZKqkLGrgyMaiEt"
          controls={true}></ReactPlayer>
      </div>
    </div>
  );
};

export default ProductDetails;
