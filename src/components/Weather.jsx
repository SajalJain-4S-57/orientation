import { useState, useEffect } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const city = import.meta.env.VITE_DEFAULT_CITY;

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error(err));
  }, []);

  if (!weather) return <p className="text-center">Loading weather...</p>;

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold">🌤 Weather in {weather.name}</h2>
      <p className="capitalize text-lg">{weather.weather[0].description}</p>
      <p className="text-5xl font-semibold">{weather.main.temp}°C</p>
    </div>
  );
}
