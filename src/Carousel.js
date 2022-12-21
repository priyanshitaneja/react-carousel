import React, { useState } from "react";

import Pagination from "./Pagination";

import "./styles/Carousel.scss";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const items = [
    {
      src: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
      alt: "image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
      alt: "image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      alt: "image 3",
    },
    {
      src: "https://images.unsplash.com/photo-1564676677001-92e8f1a0df30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
      alt: "image 4",
    },
    {
      src: "https://images.unsplash.com/photo-1473181488821-2d23949a045a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      alt: "image 5",
    },
    {
      src: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
      alt: "image 6",
    },
    {
      src: "https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      alt: "image 7",
    },
    {
      src: "https://images.unsplash.com/photo-1485841890310-6a055c88698a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      alt: "image 8",
    },
    {
      src: "https://images.unsplash.com/photo-1586957960362-65815d739527?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
      alt: "image 9",
    },
    {
      src: "https://images.unsplash.com/photo-1525373612132-b3e820b87cea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      alt: "image 10",
    },
  ];

  const previousSlide = () => {
    setIndex(index === 0 ? items.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === items.length - 1 ? 0 : index + 1);
  };

  const onClickPagination = (i) => {
    setIndex(i);
  };

  return (
    <div className="carousel__wrapper">
      <div className="carousel">
        <button className="carousel__button" onClick={previousSlide}>
          Previous
        </button>
        <img
          src={items[index].src}
          alt={items[index].alt}
          className="carousel__image"
        />
        <button className="carousel__button" onClick={nextSlide}>
          Next
        </button>
      </div>
      <Pagination
        count={items.length}
        onClickPagination={onClickPagination}
        index={index}
      />
    </div>
  );
};

export default Carousel;
