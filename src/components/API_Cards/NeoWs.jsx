import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


export const NeoWs = () => {
  const [Chartdata,setChartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/neos")
      .then((res) => {
        const nearEarthObjects = res.data.near_earth_objects;// Transform object into array
         // Flatten data into array of {date, velocity, name}
        const formatted = Object.keys(nearEarthObjects).flatMap(date =>
          nearEarthObjects[date].map(obj => ({
            date,
            velocity: parseFloat(obj.close_approach_data[0].relative_velocity.kilometers_per_second),
            name: obj.name
          }))
        );

        setChartData(formatted);
      })
      .catch((err) => {
        console.error("Error fetching API data!", err);
      });
  }, []);
  
  {Chartdata? console.log(Chartdata): console.log('data isnt available')}


  return (
        <div className=" p-6 bg-gray-900 rounded-xl shadow-lg ">
      <h2 className="text-white p-4 text-2xl mb-4 font-semibold">Near Earth Asteroid Velocities</h2>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={Chartdata}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="date" stroke="#aaa" />
          <YAxis dataKey="velocity" stroke="#aaa" label={{ value: "km/s", angle: -90, position: "insideLeft", fill: "#aaa" }}/>
          <Tooltip contentStyle={{ background: "#111", border: "1px solid #444" }} />
          <Line type="monotone" dataKey="velocity" stroke="#00f5d4" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}





