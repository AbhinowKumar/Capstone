import React, { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductDetailComp({ productInfo }) {
  const { addToCart } = useContext(CartContext);
  const navigateToDetails = useNavigate();

  function AddItemsToCart(productInfo) {
    addToCart(productInfo, 1);
  }

  return (
    <>
      <Col key={productInfo.id}>
        <Card className="h-100">
          <Card.Img
            variant="top"
            src={productInfo.image}
            height="200px"
            className="p-2"
          />
          <Card.Body>
            <Card.Title>{productInfo.title}</Card.Title>
            <Card.Text>${productInfo.price}</Card.Text>
            <Card.Text>
              <button
                className="btn btn-success me-1"
                onClick={() => AddItemsToCart(productInfo)}
              >
                Add to cart
              </button>
              <button
                className="btn btn-info"
                onClick={() => {
                  navigateToDetails(`${productInfo.id}`);
                }}
              >
                More Info
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
