import React, { useEffect } from "react";

export default function ProductsMoreInformation({
  moreInfoTrigger,
  productDescription,
}) {
  useEffect(() => {
    if (!moreInfoTrigger) {
      //alert("test less info");
    } else {
      //lert("test more info");
    }
  }, [moreInfoTrigger]);
  return <>{moreInfoTrigger && productDescription}</>;
}
