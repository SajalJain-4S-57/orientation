import { useState, useEffect } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const city = import.meta.env.VITE_DEFAULT_CITY;

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        if (!res.ok) throw new Error("Failed to fetch weather");
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, [city, apiKey]);

  if (loading) {
    return (
      <p className="text-center text-gray-300 animate-pulse mt-6">
        🌦 Loading weather...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-6">
        ❌ {error}
      </p>
    );
  }

  if (!weather) return null;

  return (
    <div className="text-center space-y-6 animate-fadeIn">
      {/* City Name */}
      <h2 className="text-3xl font-bold text-yellow-300 drop-shadow">
        🌤 Weather in {weather.name}
      </h2>

      {/* Weather Icon */}
      {weather.weather && weather.weather[0] && (
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt={weather.weather[0].description}
          className="mx-auto"
        />
      )}

      {/* Description */}
      <p className="capitalize text-lg text-gray-200">
        {weather.weather[0].description}
      </p>

      {/* Temperature */}
      <p className="text-5xl font-semibold text-white">
        {Math.round(weather.main.temp)}°C
      </p>

      {/* Additional Info */}
      <p className="text-gray-300">
        Feels like: {Math.round(weather.main.feels_like)}°C | Humidity:{" "}
        {weather.main.humidity}%
      </p>
    </div>
  );
}
