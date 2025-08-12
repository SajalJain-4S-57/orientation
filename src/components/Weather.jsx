import { useState, useEffect } from "react";

export default function Weather() {
  const [city, setCity] = useState(import.meta.env.VITE_DEFAULT_CITY || "Indore");
  const [inputCity, setInputCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const fetchWeather = (cityName) => {
    if (!cityName) return;
    setLoading(true);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.cod === 200) {
          setWeather(data);
          setCity(cityName);
          setInputCity(""); // Auto-clear input
        } else {
          alert("❌ City not found. Please try again.");
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent UI glitch
      fetchWeather(inputCity);
    }
  };

  return (
    <div className="text-center space-y-4 animate-fadeIn">
      <h2 className="text-2xl font-bold">🌤 Weather in {city}</h2>

      <div className="flex justify-center gap-2">
        <input
          type="text"
          placeholder="Enter city name"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          onKeyDown={handleKeyPress}
          className="bg-gray-900 text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          onClick={() => fetchWeather(inputCity)}
          className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading weather...</p>
      ) : weather ? (
        <>
          <p className="capitalize text-lg">{weather.weather[0].description}</p>
          <p className="text-5xl font-semibold">{weather.main.temp}°C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            className="mx-auto"
          />
          <p className="text-sm">Feels like: {weather.main.feels_like}°C</p>
          <p className="text-sm">Humidity: {weather.main.humidity}%</p>
        </>
      ) : (
        <p className="text-gray-400">No weather data available</p>
      )}
    </div>
  );
}
