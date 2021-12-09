import { useState } from "react";
import Form from "./components/form";
import Info from "./components/info";
import Weather from "./components/weather";
import config from "./config";


const weatherApiKey = config.API_KEY;


export default function App() {
  const [cityName, setCity] = useState();
  const [cityData, setCityData] = useState({});
   function handleCityName(event) {
    const { value } = event.target;
    setCity(value);
  }

  async function gettingWeather(event) {
    if(cityName){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}&units=metric`);
      const data = await api_url.json();
      setCityData( {
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
      });
    }
  }
  return (
    <div>
      <Info />
      <Form weatherButton={gettingWeather} onCityChange={handleCityName}/>
      <Weather temp={cityData.temp} city={cityData.city} />
    </div>
  );
}