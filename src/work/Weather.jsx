import { useState } from "react";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const apiKey = import.meta.env.VITE_APP_APIKEY;

  const fetchWeather = async () => {
    if (!city.trim()) return setError("Please enter a city");
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();
      if (data.cod === "404") {
        setError("City not found");
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch {
      setError("Something went wrong");
      setWeather(null);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-container">
        <div className="weather-box">
          <h1 className="weather-title">Weather App</h1>
          <input
            type="text"
            placeholder="Enter city"
            className="weather-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
          />
          <button className="weather-btn" onClick={fetchWeather}>
            Get Weather
          </button>
          {error && <p className="weather-error">{error}</p>}
          {weather && (
            <div className="weather-result">
              <h2>
                {weather.name}, {weather.sys.country}
              </h2>
              <p className="weather-desc">{weather.weather[0].description}</p>
              <p>Temp: {weather.main.temp}°C</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind: {weather.wind.speed} m/s</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
