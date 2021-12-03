import React from "react";
import "./registeration.css";
function Login({
  loginEmail,
  loginPassword,
  userLoginInformation,
  setUserLoginInformation,
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
      loginUpdatedData.some((c) => c.email === userLoginInformation.loginEmail)
    ) {
      console.log("loginaccepted");
      //   this.props.history.push({
      //     pathname: `/share`,
      //   });
    } else {
      alert("incorrect email ");
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleLoginSubmit} className="login-form">
        <span className="login-title">Login</span>
        <label>Email</label>
        <input
          name="loginEmail"
          type="email"
          value={userLoginInformation.loginEmail}
          onChange={handleonChange}
          placeholder="enter your email"
          required
        />
        <label>password</label>
        <input
          name="loginPassword"
          type="password"
          value={userLoginInformation.loginPassword}
          onChange={handleonChange}
          placeholder="enetr your password"
          required
        />
        <button className="login-btn">submit</button>
      </form>
    </div>
  );
}

export default Login;
