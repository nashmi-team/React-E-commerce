import "./App.css";
import { useState, useEffect } from "react";
import Profile from "./components/Profile/Profile";

const App = () => {
  // All State
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

  return (
    <div className="App">
      <Profile dataWeather={dataWeather} />
    </div>
  );
};

export default App;
