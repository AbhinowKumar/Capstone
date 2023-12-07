import React, { useState } from "react";
import CarouselImage from "./CarouselImage";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";

export default function SliderComp() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <CarouselItem>
        <CarouselImage
          text="First slide"
          imagesource="https://www.interflora.se/siteassets/startsidan/promos-2023/promo-advent-gava-2023-desktop-1600x781px.jpg"
        />
        <Carousel.Caption>
          <h3>Flowers</h3>
          <p>Flowers details</p>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <CarouselImage
          text="Second slide"
          imagesource="https://images.pexels.com/photos/132474/pexels-photo-132474.jpeg?auto=compress&cs=tinysrgb&w=800"
        />
        <Carousel.Caption>
          <h3>White Daisy</h3>
          <p>White Daisy Details</p>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <CarouselImage
          text="Third slide"
          imagesource="https://www.interflora.se/contentassets/5a80db38f7a94beaa490e8367992a96b/rosa-bandet-2023-teaserbild.jpg"
        />
        <Carousel.Caption>
          <h3>Red Lily</h3>
          <p>Red Lily Details</p>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
  );
}
