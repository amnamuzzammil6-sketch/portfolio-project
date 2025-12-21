import React, { useState } from "react";
import "./Weather.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaSearch, FaTemperatureHigh, FaWind, FaTint, FaMapMarkerAlt } from "react-icons/fa";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  
  // Ensure your .env file has VITE_APP_APIKEY
  const apiKey = import.meta.env.VITE_APP_APIKEY;

  const fetchWeather = async () => {
    if (!city.trim()) return setError("Please enter a city name.");
    
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();
      
      if (data.cod !== 200) {
        setError("City not found. Please try again.");
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch {
      setError("Network error. Check your connection.");
      setWeather(null);
    }
  };

  return (
    <div className="weather-page">
      <motion.div 
        className="weather-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="weather-title">Live Weather</h1>
        <p className="weather-subtitle">Real-time data via OpenWeatherMap API.</p>

        {/* Search Bar */}
        <div className="weather-input-group">
          <input
            type="text"
            placeholder="Enter city (e.g., Lahore)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
          />
          <button onClick={fetchWeather} aria-label="Search">
            <FaSearch />
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="weather-error">{error}</p>}

        {/* Weather Results */}
        <AnimatePresence>
          {weather && (
            <motion.div 
              className="weather-result"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="location-tag">
                <FaMapMarkerAlt /> {weather.name}, {weather.sys.country}
              </div>
              
              <div className="main-temp">
                {Math.round(weather.main.temp)}°C
              </div>
              
              <p className="weather-desc">
                {weather.weather[0].description}
              </p>

              {/* Details Grid */}
              <div className="weather-details">
                <div className="detail-box">
                  <FaTemperatureHigh className="icon" />
                  <span>Feels Like</span>
                  <strong>{Math.round(weather.main.feels_like)}°C</strong>
                </div>
                
                <div className="detail-box">
                  <FaTint className="icon" />
                  <span>Humidity</span>
                  <strong>{weather.main.humidity}%</strong>
                </div>
                
                <div className="detail-box">
                  <FaWind className="icon" />
                  <span>Wind</span>
                  <strong>{weather.wind.speed} m/s</strong>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Back */}
        <Link to="/portfolio" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>
      </motion.div>
    </div>
  );
}