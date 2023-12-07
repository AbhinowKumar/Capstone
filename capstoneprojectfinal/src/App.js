import "./App.css";
import { Suspense, lazy } from "react";
import Home from "./Component/Home";
import Header from "./Component/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "./Component/NotFound";
import Login from "./Component/Login";
import Protected from "./Component/Protected";
import { useState } from "react";
import axios from "axios";
import ProductMoreInfo from "./Component/ProductMoreInfo";
const ProductsComp = lazy(() => import("./Component/ProductsComp"));
const Employees = lazy(() => import("./Component/Employees"));
const Cart = lazy(() => import("./Component/Cart"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nav = useNavigate();
  const logIn = (userEmail, password) => {
    axios
      .get(
        `http://localhost:8000/Users?email=${userEmail}&password=${password}`
      )
      .then((employees) => {
        if (employees.data.length > 0) {
          setIsLoggedIn(true);
          nav("/");
        } else {
          setIsLoggedIn(false);
          alert("Wrong credentials");
        }
      })
      .catch((err) => console.log(err));
  };
  const logOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="">
      <div className="mb-4">
        <Header checklogin={isLoggedIn} logout={logOut} />
      </div>
      <div className="container mb-4">
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login login={logIn} />} />

            <Route
              path="/Products"
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <ProductsComp />
                </Protected>
              }
            ></Route>
            <Route path="/Products/:productId" element={<ProductMoreInfo />} />
            <Route
              path="/Employees"
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <Employees />
                </Protected>
              }
            />
            <Route
              path="/Cart"
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <Cart />
                </Protected>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
