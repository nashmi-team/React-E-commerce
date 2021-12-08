import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { CartProvider } from "react-use-cart";
import Profile from "./components/Profile/Profile";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import Signup from "./components/registerationforms/Signup";
import Login from "./components/registerationforms/Login";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SingleProduct from "./components/Shop/SingleProduc/SingleProduct";
import Slider from "./components/Slider/Slider";
import Checkout from "./components/Checkout/Checkout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import OurTeam from "./components/OurTeam/OurTeam";

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
  const [logged, setLogged] = useState(false);

  const [checkOrdered, setCheckOrdered] = useState(false);

  return (
    <Router>
      <CartProvider>
        <NavBar logged={logged} setLogged={setLogged} />
        <ScrollToTop />
        <Switch>
          <Route path="/registeration">
            <div className="register-style">
              <Signup
                setUserSignupInformation={setUserSignupInformation}
                userSignupInformation={userSignupInformation}
                submitted={submitted}
                setSubmitted={setSubmitted}
                logged={logged}
                setLogged={setLogged}
              />
              <Login
                userLoginInformation={userLoginInformation}
                setUserLoginInformation={setUserLoginInformation}
                logged={logged}
                setLogged={setLogged}
                submitted={submitted}
                setSubmitted={setSubmitted}
              />
            </div>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route path="/profile">
            <Profile
              checkOrdered={checkOrdered}
              logged={logged}
              setLogged={setLogged}
            />
          </Route>
          <Route exact path="/shop/:productName">
            <SingleProduct />
          </Route>
          <Route path="/slider">
            <Slider />
          </Route>
          <Route path="/checkout">
            <Checkout setCheckOrdered={setCheckOrdered} />
          </Route>
          <Route path="/our-team">
            <OurTeam />
          </Route>
        </Switch>
      </CartProvider>

      <Footer />
    </Router>
  );
};

export default App;
