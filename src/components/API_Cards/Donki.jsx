import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const DonkiApi = () => {
    const [flareData , setFlareData] = useState([])
    const Api_Key = "xs9jqCh4PkMKo8geVNFUzjhgHLA5bX9rjfwH28g9"
    useEffect(()=>{
        axios
        .get(`https://api.nasa.gov/DONKI/FLR?startDate=2017-09-01&endDate=2017-09-10&api_key=${Api_Key}`)
        .then((res)=>{
            const rawData = res.data
        // Transform: count flares per day
          const counts = {};
          rawData.forEach((flare) => {
          const date = flare.beginTime.split("T")[0]; // take YYYY-MM-DD
          counts[date] = (counts[date] || 0) + 1;
        });
        // Format for Recharts
        const formatted = Object.keys(counts).map((date) => ({
          date,
          flares: counts[date],
        }));
        setFlareData(formatted);
        })
        .catch((err)=>{
            console.error("error fetching donki data" , err)
        })
    },[])

  if (!flareData) return <p className="text-white">Loading...</p>;
  return (
      <div className="bg-[#111827] p-4 rounded-2xl shadow-md">
      <h2 className=" text-2xl p-4 font-semibold mb-4 text-white">
        Solar Flares (per day)
      </h2>

      {flareData ? (
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={flareData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="date" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="flares" fill="#ff9900" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-white">Loading solar flare data...</p>
      )}
    </div>
  )
}
