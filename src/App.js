import "./App.css";
import { CartProvider } from "react-use-cart";
import Shop from "./components/Shop/Shop";
import SingleProduct from "./components/SingleProduc/SingleProduct";
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
      <CartProvider>
        <NavBar />
        <Switch>
          <Route path="/registeration">
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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route exact path="/Product/:id">
            <SingleProduct />
          </Route>
        </Switch>
      </CartProvider>
      <Footer />
    </Router>
  );
};

export default App;
