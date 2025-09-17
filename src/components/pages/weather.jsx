import axios from "axios";
import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock, faSatellite, faSun } from "@fortawesome/free-solid-svg-icons";
import { TiWeatherCloudy } from "react-icons/ti";


const SpaceWeather = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/space-weather")
      .then((res) => {
        
        if (!Array.isArray(res.data)) {
        console.warn("Unexpected Space Weather response:", res.data);
        setEvents([]); // fallback
        return;
  }
  setEvents(res.data);
      })
      .catch((err) => {
        setError("Failed to fetch space weather data");
        console.error(err);
      });
  }, []);
  if (error) return <p className="text-red-500">{error}</p>;

return (
  <div className="bg-gradient-to-br mt-10 from-gray-900 via-gray-800 to-black p-8 rounded-3xl shadow-2xl text-white border border-gray-700">
    <h1 className="text-3xl flex flex-row justify-center items-center gap-1.5 font-extrabold text-center mb-8 ">
    <TiWeatherCloudy className="text-3xl"/>
    Mars Weather Updates
    </h1>

{events.length === 0 ? (
  <div className="flex justify-center items-center mt-10">
      <button type="button" className="btn">
        <strong>Loading Mars Weather Data ...</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>
        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
    </div>
) : (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {events.map((event, idx) => (
    <div
      key={idx}
      className="group relative rounded-2xl overflow-hidden border border-gray-700 bg-gray-800/60 hover:bg-gray-800/90 hover:border-cyan-400 transition transform hover:-translate-y-1"
    >
      <div className="p-6">
        <h2 className="text-xl font-bold text-cyan-400 group-hover:text-white transition">
          Sol {event.sol} – {event.season}
        </h2>
        <p className="text-sm text-gray-400 mt-2">
          🌡️ <span className="font-semibold text-gray-300">Avg Temp:</span>{" "}
          {event.avgTemp} °C
        </p>
        <p className="text-sm text-gray-400 mt-1">
          🔼 Max: {event.maxTemp} °C | 🔽 Min: {event.minTemp} °C
        </p>
        <p className="text-sm text-gray-400 mt-1">
          💨 <span className="font-semibold text-gray-300">Wind:</span>{" "}
          {event.windSpeed} m/s
        </p>
        <p className="text-sm text-gray-400 mt-1">
          📊 <span className="font-semibold text-gray-300">Pressure:</span>{" "}
          {event.pressure} Pa
        </p>
      </div>
    </div>
  ))}
</div>

)}</div>
)}



export default SpaceWeather;
