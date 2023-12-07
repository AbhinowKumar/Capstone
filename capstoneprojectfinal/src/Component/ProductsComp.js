import axios from "axios";
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import ProductDetailComp from "./ProductDetailComp";

export default function ProductsComp() {
  const [data, setData] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [productSearch, setProductSearch] = useState("");
  useEffect(() => {
    axios
      .get(" http://localhost:8000/Products")
      .then((res) => {
        setData(res.data);
        setFilteredProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleProductSearch = (e) => {
    if (e.target.value.trim() === "") {
      setFilteredProduct(data);
    } else {
      const filterProducts = data.filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredProduct(filterProducts);
    }
    setProductSearch(e.target.value);
  };
  return (
    <>
      <div className="center-search">
        <input
          type="text"
          placeholder="Search Product"
          onChange={handleProductSearch}
          value={productSearch}
          className="center-search-input mb-4"
        />
      </div>
      <div>
        <Row xs={1} md={4} className="g-4">
          {filteredProduct.map((objProduct) => (
            <ProductDetailComp key={objProduct.id} productInfo={objProduct} />
          ))}
        </Row>
      </div>
    </>
  );
}
