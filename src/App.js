import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { CartProvider } from "react-use-cart";
import Profile from "./components/Profile/Profile";
import Shop from "./components/Shop/Shop";

import Home from "./components/Home/Home";
import Signup from "./components/registerationforms/Signup";
import Login from "./components/registerationforms/Login";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SingleProduct from "./components/Shop/SingleProduc/SingleProduct";

const App = () => {
  // All State
  const [updatedData, setUpdatedData] = useState({ items: "" });
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

  // Weather Data & State
  const [dataWeather, setDataWeather] = useState({});

  const get = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Amman&units=metric&appid=0cef1dfd8f5e8437bbb45886a733a63c"
    );
    const data = await response.json();

    setDataWeather({
      name: data.name,
      temp: Math.round(data.main.temp),
      description: data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
    });
  };
  useEffect(() => get(), []);

  const local = () => {
    const localData = JSON.parse(localStorage.getItem("react-use-cart"));
    setUpdatedData({ items: localData.items });
  };
  useEffect(() => local(), []);

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
                logged={logged}
                setLogged={setLogged}
              />
            </div>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/dataWeather">
            <Profile
              dataWeather={dataWeather}
              logged={logged}
              setLogged={setLogged}
              updatedData={updatedData}
            />
          </Route>
          <Route exact path="/Product/:id" children={<Shop />}>
            <SingleProduct />
          </Route>
        </Switch>
      </CartProvider>
      <Footer />
    </Router>
  );
};

export default App;
