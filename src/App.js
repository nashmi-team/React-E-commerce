import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

const App = () => {

  return (
  <>
    <BrowserRouter>
    <NavBar />
    <Home />
    <Footer />
    </BrowserRouter>

  </>
  );
};

export default App;
