import React from "react";

export default function CarouselImage({ text, imagesource }) {
  return (
    <>
      <img src={imagesource} alt={text} height="400px" width="100%" />
    </>
  );
}
