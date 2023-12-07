import React from "react";
import CardDetailComp from "./CardDetailComp";

export default function CardComp() {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <CardDetailComp
            imagesource="https://www.interflora.se/siteassets/produkter/jul/jul-2023/1202370-2023-4.5.jpg"
            alttext="Flower1"
          />
        </div>
        <div className="col-4">
          <CardDetailComp
            imagesource="https://www.interflora.se/siteassets/produkter/2023/miljobilder/1201157-4.5-m1.jpg"
            alttext="Flower2"
          />
        </div>
        <div className="col-4">
          <CardDetailComp
            imagesource="https://www.interflora.se/siteassets/produkter/2023/buketter/1201157-2023-4.5.jpg"
            alttext="Flower3"
          />
        </div>
      </div>
    </>
  );
}
