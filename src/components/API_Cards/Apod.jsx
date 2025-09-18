import { useEffect, useState } from "react";
import axios from "axios";

export const ApodTest = () => {
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState(false);

  // How many chars to show before "Read more"
  const limit = 150; 

  const toggleText = () => setExpanded(!expanded);


  useEffect(() => {
    axios
      .get("https://space-exp-dashboard-backend.onrender.com/api/apod")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching NASA API:", err);
      });
  }, []);

  if (!data) return <p className="text-white">Loading...</p>;
  return (
    <div className="bg-[#111827] rounded-xl shadow-lg overflow-hidden 
                w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto mb-6">
      <h1 className="text-white text-2xl font-semibold mb-3 p-4">Astronomy Picture Of The Day</h1>
      <img
        src={data.url}
        alt={data.title}
        className="w-full h-56 object-cover"
        style={{ maxWidth: "100%" }}
      />
      <h1 className="text-white text-2xl font-semibold mt-2 ">{data.title}</h1>
      <div className="p-5">
        <p className="text-gray-300">
          {data.explanation
            ? expanded
            ? data.explanation
            : `${data.explanation.slice(0, limit)}...`
            : "Loading description..."}
          {data.explanation && data.explanation.length > limit && (
          <span
            onClick={toggleText}
            className="text-blue-400 hover:underline "
            style={{cursor:"pointer"}}
          >
          {expanded ? "Show less ▲" : "Read more ▼"}
          </span>
          )}
        </p>
      </div>
    </div>
  );
};


