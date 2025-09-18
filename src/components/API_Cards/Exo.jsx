import { useEffect, useState } from "react";
import axios from "axios";
import {
  ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

const ExoplanetsChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://space-exp-dashboard-backend.onrender.com/exo-candidates")
      .then((res) => {
         console.log("Raw data:", res.data); // <--- check what you get back

      const formatted = (res.data || []) // make sure it's an array
        .filter(
          (d) =>
            d.koi_prad && d.koi_teq // only keep complete data
        )
        .map((d) => ({
          name: d.kepler_name || d.kepid, // fallback if name missing
          radius: +d.koi_prad, // Earth radii
          temp: +d.koi_teq,   // equilibrium temp (Kelvin)
        }));
        setData(formatted);
      })
      .catch((err) => console.error("Error fetching exoplanet candidates:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow-lg max-w-110 mx-auto">
      <h2 className="text-white p-4 text-2xl mb-4 font-semibold">
        Potential Earth-like Candidates
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart>
          <CartesianGrid stroke="#333" />
          <XAxis
            type="number"
            dataKey="temp"
            name="Equilibrium Temp (K)"
            stroke="#ccc"
          />
          <YAxis
            type="number"
            dataKey="radius"
            name="Planet Radius (Earth Radii)"
            stroke="#ccc"
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Candidates" data={data} fill="#82ca9d" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExoplanetsChart;
