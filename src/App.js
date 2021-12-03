import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  // All State
  return (
  <>
    <BrowserRouter>
    <NavBar />
    <Header />
    </BrowserRouter>
  </>
  );
};

export default App;
