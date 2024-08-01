import React, { useState } from "react";
import "./WeatherApp.css";

const apiKey = "208453afc2cb0125c067d36800932307";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (city) {
      try {
        const data = await getWeatherData(city);
        setWeatherData(data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Invalid area name");
        setWeatherData(null);
      }
    } else {
      setError("Please enter a city name");
    }
  };

  const getWeatherData = async (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  };

  const getWeatherEmoji = (weatherId) => {
    switch (true) {
      case weatherId >= 200 && weatherId <= 300:
        return "⛈️";
      case weatherId >= 300 && weatherId <= 500:
        return "🌧️";
      case weatherId >= 500 && weatherId <= 600:
        return "🌧️";
      case weatherId >= 600 && weatherId <= 700:
        return "❄️";
      case weatherId >= 700 && weatherId <= 800:
        return "🌫️";
      case weatherId === 800:
        return "☀️";
      case weatherId > 800 && weatherId <= 810:
        return "☁️";
      default:
        return "🌞";
    }
  };

  return (
    <div className="weatherApp">
      <form className="weatherForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="cityInput"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {weatherData && (
        <div className="card">
          <h1 className="cityDisplay">{weatherData.name}</h1>
          <p className="tempDisplay">
            {(weatherData.main.temp - 273.15).toFixed(1)}°C
          </p>
          <p className="humidityDisplay">
            Humidity: {weatherData.main.humidity}%
          </p>
          <p className="descDisplay">{weatherData.weather[0].description}</p>
          <p className="weatherEmoji">
            {getWeatherEmoji(weatherData.weather[0].id)}
          </p>
        </div>
      )}

      {error && (
        <div className="card">
          <p className="errorDisplay">{error}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
