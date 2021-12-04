import "./App.css";
import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/registerationforms/Signup";
import Login from "./components/registerationforms/Login";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
const App = () => {
  // All State

  const [userSignupInformation, setUserSignupInformation] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [userLoginInformation, setUserLoginInformation] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <div className="register-style">
            <Signup
              setUserSignupInformation={setUserSignupInformation}
              userSignupInformation={userSignupInformation}
              submitted={submitted}
              setSubmitted={setSubmitted}
            />
            <Login
              userLoginInformation={userLoginInformation}
              setUserLoginInformation={setUserLoginInformation}
            />
          </div>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
