import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, getCartTotal } =
    useContext(CartContext);
  const handleQuantityChange = (event, item) => {
    if (event.target.value !== item.quantity) {
      if (event.target.value > item.quantity) {
        addToCart(item, event.target.value - item.quantity);
      } else if (event.target.value < item.quantity) {
        addToCart(item, event.target.value - item.quantity);
      }
    }
  };
  return (
    <div>
      <div>
        <h5 className="home-heading">My Cart</h5>
      </div>
      <div>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Quantity</th>
              <th>Price Per Unit</th>
              <th>Total Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <tr key={cartItem.id}>
                <td>
                  <img src={cartItem.image} alt="Product 1" height="40px" />
                </td>
                <td>{cartItem.title}</td>
                <td>
                  <select
                    value={cartItem.quantity}
                    onChange={(e) => handleQuantityChange(e, cartItem)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>{cartItem.price}</td>
                <td>{(cartItem.quantity * cartItem.price).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      if (
                        window.confirm(
                          `Are you sure you want to remove "${cartItem.title}" from cart ?`
                        )
                      ) {
                        removeFromCart(cartItem);
                      }
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="4" className="cell-right">
                Total Price
              </td>
              <td>{getCartTotal().toFixed(2)}</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
