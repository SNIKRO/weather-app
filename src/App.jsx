import { useState } from "react";
import Form from "./components/form";
import Info from "./components/info";
import Weather from "./components/weather";
import config from "./config";


const weatherApiKey = config.API_KEY.WEATHER_API_KEY;

export default function App() {
  const [cityName, setCity] = useState();
  const [cityData, setCityData] = useState({});
   function handleCityName(event) {
    const { value } = event.target;
    setCity(value);
  }

  async function gettingWeather(event) {
    event.preventDefault();
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}&units=metric`);
    console.log(api_url);
    if(api_url.ok) {
      const data = await api_url.json();
      setCityData( {
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        errorMessage: undefined,
      });
  }
  else{
    setCityData({
      errorMessage: api_url.statusText,
      temp: undefined,
      city: undefined,
      country: undefined,
      error: true,
    });
  }
  }
  return (
    <div className="wrapper" >
      <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 info">
            <Info />
            </div>
            <div className="col-sm-7 form">
            <Form weatherButton={gettingWeather} onCityChange={handleCityName}/>
            <Weather temp={ cityData.temp } city={cityData.city} error={cityData.errorMessage} /> 
            </div>
          </div>
        </div>
      </div>
     </div>
  );
}