import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function ProductMoreInfo(props) {
  const { addToCart } = useContext(CartContext);
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [isProductReceived, setIsProductReceived] = useState(false);
  function AddItemsToCart(productInfo) {
    addToCart(productInfo, 1);
  }
  useEffect(() => {
    axios
      .get(`http://localhost:8000/Products/${productId}`)
      .then((res) => {
        setProductDetail(res.data);
        setIsProductReceived(true);
      })
      .catch((err) => {
        setProductDetail([]);
        setIsProductReceived(false);
        console.log(err);
      });
  }, [productId]);

  return (
    <>
      {isProductReceived && (
        <Col key={productDetail.id}>
          <Card className="h-100">
            <div className="row">
              <div className="col-4">
                <Card.Img
                  variant="top"
                  height={"100%"}
                  src={productDetail.image}
                  className="p-2"
                />
              </div>
              <div className="col-8">
                {" "}
                <Card.Body>
                  <Card.Title>{productDetail.title}</Card.Title>
                  <Card.Text>${productDetail.price}</Card.Text>
                  <Card.Text>{productDetail.description}</Card.Text>

                  <Card.Text>
                    <button
                      className="btn btn-success me-1"
                      onClick={() => AddItemsToCart(productDetail)}
                    >
                      Add to cart
                    </button>
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </Col>
      )}
    </>
  );
}
