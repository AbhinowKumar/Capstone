import React, { useState } from "react";

export default function Login({ login, logout }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const LoginUser = (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (email === "") {
      setEmailError("*Please enter your email");
      return;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("*Please enter a valid email");
      return;
    }

    if (password === "") {
      setPasswordError("*Please enter a password");
      return;
    } else if (password.length < 7) {
      setPasswordError("*Password must be 8 characters or longer");
      return;
    }

    login(email, password);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h5 className="home-heading form-container">Login</h5>
          <div className="container form-container">
            <form>
              <div className="form-group">
                <div className="row mb-1">
                  <div className="col-2">
                    <label>Email*</label>
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <i className="lblError">{emailError}</i>
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="col-2">
                    <label>Password*</label>
                  </div>
                  <div className="col-4">
                    <input
                      type="password"
                      required={true}
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <i className="lblError">{passwordError}</i>
                  </div>
                </div>

                <div className="row">
                  <div>
                    <button className="btn btn-success  " onClick={LoginUser}>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
