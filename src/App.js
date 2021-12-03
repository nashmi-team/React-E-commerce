import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { CartProvider } from "react-use-cart";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
const App = () => {
  // All State
  return (
    <>
      <Router>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
          </Switch>
        </CartProvider>
      </Router>
    </>
  );
};

export default App;
