import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductSlider from "./components/ProductSlider/ProductSlider";
import { Reviews } from "./components/Reviews/Reviews";
const App = () => {
  // All State
  return (
  <>
    <BrowserRouter>
    <NavBar />
    <Header />
    <ProductSlider />
    <Reviews />
    <Footer />
    </BrowserRouter>
  </>
  );
};

export default App;
