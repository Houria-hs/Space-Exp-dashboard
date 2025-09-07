import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

export const SpaceXLaunches = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v5/launches")
      .then((res) => {
        const launches = res.data;

        // Group launches by year
        const counts = launches.reduce((acc, launch) => {
          const year = new Date(launch.date_utc).getFullYear();
          acc[year] = (acc[year] || 0) + 1;
          return acc;
        }, {});

        // Convert to chart-friendly format
        const formatted = Object.keys(counts).map(year => ({
          year,
          launches: counts[year]
        }));

        setData(formatted);
      })
      .catch((err) => console.error("Error fetching SpaceX launches:", err));
  }, []);

  if (!data.length) return <p className="text-white">Loading SpaceX data...</p>;

  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow-lg ">
      <h2 className="text-white text-2xl mb-4 p-4 font-semibold">SpaceX Launches per Year</h2>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="year" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip contentStyle={{ background: "#111", border: "1px solid #444" }} />
          <Bar dataKey="launches" fill="#ff4d6d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


