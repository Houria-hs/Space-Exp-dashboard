import { useEffect, useState } from "react";
import axios from "axios";

export const ApodTest = () => {
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const API_KEY ="xs9jqCh4PkMKo8geVNFUzjhgHLA5bX9rjfwH28g9"

  // How many chars to show before "Read more"
  const limit = 150; 

  const toggleText = () => setExpanded(!expanded);

  useEffect(() => {
    axios
      .get( `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching NASA API:", err);
      });
  }, []);

  if (!data) return <p className="text-white">Loading...</p>;
  return (
    <div className=" bg-[#111827] rounded-xl shadow-lg overflow-hidden max-w-md mx-auto border border-gray-700">
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


