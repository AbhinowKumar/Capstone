import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function Header({ checklogin, logout }) {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <div className="container">
          <div className="col-6">
            <img
              src="https://images.pexels.com/photos/70330/pexels-photo-70330.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="site-logo"
              alt="logo"
              width="50"
              height="50"
            />{" "}
            <h3 className="site-heading">Flower Hub</h3>
          </div>

          <div className=" right-align">
            <Nav className="me-end">
              <Link className="nav-link" to="/">
                Home |
              </Link>
              {!checklogin && (
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              )}
              {checklogin && (
                <Link className="nav-link" to="/Employees">
                  {" "}
                  Employees |
                </Link>
              )}
              {checklogin && (
                <Link className="nav-link" to="/Products">
                  {" "}
                  Products |
                </Link>
              )}
              {checklogin && (
                <Link className="nav-link" to="/Cart">
                  {" "}
                  <i className="fa fa-shopping-cart"></i> Cart(
                  {cartItems.length}) |
                </Link>
              )}
              {checklogin && (
                <button className="nav-link" onClick={logout}>
                  Logout
                </button>
              )}
            </Nav>
          </div>
        </div>
      </Navbar>
    </>
  );
}
