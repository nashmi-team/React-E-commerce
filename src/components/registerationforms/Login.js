import React from "react";
import { withRouter } from "react-router-dom";
import "./registeration.css";

function Login({
  userLoginInformation,
  setUserLoginInformation,
  history,
  setLogged,
}) {
  const handleonChange = (e) => {
    const { name, value } = e.target;

    setUserLoginInformation({
      ...userLoginInformation,
      [name]: value,
    });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    let loginUpdatedData = [];
    loginUpdatedData = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : [];

    const checkUser = loginUpdatedData.filter(
      (c) =>
        c.email === userLoginInformation.loginEmail &&
        c.password === userLoginInformation.loginPassword
    );

    const check = checkUser.some(
      (c) =>
        c.email === userLoginInformation.loginEmail &&
        c.password === userLoginInformation.loginPassword
    );

    if (check) {
      history.push({
        pathname: `/shop`,
      });
      setLogged(true);
      sessionStorage.setItem(
        "loggedAccount",
        JSON.stringify({
          email: checkUser[0].email,
          username: checkUser[0].username,
        })
      );
    } else {
      alert("incorrect email or password ");
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleLoginSubmit} className="login-form">
        <fieldset>
          <legend>Login</legend>

          <label>
            Email
            <input
              className="registretion-input"
              name="loginEmail"
              type="email"
              value={userLoginInformation.loginEmail}
              onChange={handleonChange}
              placeholder="enter your email"
              required
            />
          </label>
          <label>
            password
            <input
              className="registretion-input"
              name="loginPassword"
              type="password"
              value={userLoginInformation.loginPassword}
              onChange={handleonChange}
              placeholder="enetr your password"
              required
            />
          </label>
          <button className="login-btn">submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default withRouter(Login);
