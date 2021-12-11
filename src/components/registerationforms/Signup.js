import React from "react";
import "./registeration.css";
import { withRouter } from "react-router-dom";

function Signup({
  userSignupInformation,
  setUserSignupInformation,
  submitted,
  setSubmitted,
  history,
  logged,
  setLogged,
}) {
  const handleonChange = (e) => {
    const { name, value } = e.target;

    setUserSignupInformation({
      ...userSignupInformation,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, username, password, repeatPassword } = e.target;
    let data = {
      id: Math.random() * 100,
      username: username.value,
      email: email.value,
      password: password.value,
      repeatPassword: repeatPassword.value,
    };
    let updatedData = [];
    updatedData = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : [];

    if (
      updatedData.some((v) => v.email === userSignupInformation.email) ||
      password.value !== repeatPassword.value ||
      password.value < 6
    ) {
      alert("email already exist");
    } else {
      updatedData.push(data);
      localStorage.setItem("user", JSON.stringify(updatedData));

      history.push({
        pathname: `/shop`,
      });
      sessionStorage.setItem(
        "loggedAccount",
        JSON.stringify({
          email: userSignupInformation.email,
          username: userSignupInformation.username,
        })
      );
      setSubmitted(true);
      setLogged(true);
    }
  };

  return (
    <div className="big-form">
      <form className="form-container" onSubmit={handleSubmit}>
        <fieldset>
<<<<<<< HEAD
          <legend>SignUp</legend>
=======
          <legend>Registration</legend>
>>>>>>> cabe05a1227b92586c15930cfa65fd955b329483
          <label htmlFor="username">
            username
            <input
              className="registretion-input"
              id="1"
              name="username"
              type="text"
              value={userSignupInformation.username}
              onChange={handleonChange}
              placeholder="enter your username"
              required
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              className="registretion-input"
              id="2"
              name="email"
              type="email"
              value={userSignupInformation.email}
              onChange={handleonChange}
              placeholder="enter your email"
              required
            />
          </label>
          {userSignupInformation.email === "" ? (
            <span style={{ color: "red" }}>please enter your email </span>
          ) : null}
          <label htmlFor="passowrd">
            Password
            <input
              className="registretion-input"
              id="3"
              name="password"
              type="password"
              value={userSignupInformation.password}
              onChange={handleonChange}
              placeholder="enter your password"
              required
            />
          </label>

          {userSignupInformation.password.length < 6 &&
          userSignupInformation.password === "" ? (
            <span style={{ color: "red" }}>Please enter your password</span>
          ) : null}
          <label htmlFor="r.password">
            Repeat-password
            <input
              className="registretion-input"
              id="4"
              name="repeatPassword"
              type="password"
              value={userSignupInformation.repeatPassword}
              onChange={handleonChange}
              placeholder="confirm password"
              required
            />
          </label>
          {userSignupInformation.repeatPassword !==
          userSignupInformation.password ? (
            <span style={{ color: "red" }}>not match </span>
          ) : null}

          <button type="submit" className="form-btn">
            submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default withRouter(Signup);
