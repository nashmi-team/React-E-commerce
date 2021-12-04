import React from "react";
import { withRouter } from "react-router";
import "./registeration.css";
function Login({
  loginEmail,
  loginPassword,
  userLoginInformation,
  setUserLoginInformation,
  history,
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
    const { loginEmail, loginPassword } = e.target;
    let loginData = {
      loginEmail: loginEmail.value,
      loginPassword: loginPassword.value,
    };
    let loginUpdatedData = new Array();
    loginUpdatedData = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : [];

    if (
      loginUpdatedData.some(
        (c) =>
          c.email === userLoginInformation.loginEmail &&
          c.password === userLoginInformation.loginPassword
      )
    ) {
      history.push({
        pathname: `/shop`,
      });
    } else {
      alert("incorrect email ");
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