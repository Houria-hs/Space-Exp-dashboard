import React, { useState } from "react";

const WeightCalculator = () => {
  const [weight, setWeight] = useState("");
  const [planet, setPlanet] = useState("Earth");
  const [result, setResult] = useState(null);

  const gravity = {
    Mercury: 3.7,
    Venus: 8.87,
    Earth: 9.81,
    Moon: 1.62,
    Mars: 3.71,
    Jupiter: 24.79,
    Saturn: 10.44,
    Uranus: 8.69,
    Neptune: 11.15,
    Pluto: 0.62,
  };

  const calculateWeight = () => {
    if (!weight) return;
    const earthWeight = parseFloat(weight); 
    const newWeight = (
      earthWeight *
      (gravity[planet] / gravity.Earth)
    ).toFixed(2);
    setResult(newWeight);
  };

  return (
    <div className="bg-gradient-to-br mt-11 from-gray-900 via-gray-800 to-blue-900 p-4 rounded-2xl shadow-xl text-white border border-gray-700 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl p-10 text-white">
        <h1 className="text-3xl font-extrabold text-center mb-8">
          Space Weight Calculator
        </h1>

        {/* Input */}
        <input
          type="number"
          placeholder="Enter your weight (kg on Earth)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        {/* Dropdown */}
        <select
          value={planet}
          onChange={(e) => setPlanet(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        >
          {Object.keys(gravity).map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        {/* Button */}
        <button
          onClick={calculateWeight}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg shadow-md transition"
        >
          🚀 Calculate
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 text-center">
            <p className="text-xl">
              Your weight on{" "}
              <span className="font-bold capitalize">{planet}</span> is{" "}
              <span className="text-yellow-400 font-bold">{result} kg</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeightCalculator;
