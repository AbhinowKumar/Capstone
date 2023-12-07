import React from "react";

export default function CardDetailComp({ imagesource, alttext }) {
  return (
    <>
      <img src={imagesource} alt={alttext} width="100%" height="100%" />
    </>
  );
}
