import "./App.css";
import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/registerationforms/Signup";
import Login from "./components/registerationforms/Login";
import Fakepage from "./components/registerationforms/Fakepage";

const App = () => {
  // All State

  const [userSignupInformation, setUserSignupInformation] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    isApproved: false,
  });
  const [userLoginInformation, setUserLoginInformation] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="register-style">
            <Signup
              setUserSignupInformation={setUserSignupInformation}
              userSignupInformation={userSignupInformation}
            />
            <Login
              userLoginInformation={userLoginInformation}
              setUserLoginInformation={setUserLoginInformation}
            />
          </div>
        </Route>
        <Route path="/fakepage">
          <Fakepage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
