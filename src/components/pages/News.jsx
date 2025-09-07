import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GiSattelite } from "react-icons/gi";
import { IoRocket } from "react-icons/io5";



const SpaceNewsPanel = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://api.spaceflightnewsapi.net/v4/articles')
      .then(res =>{
        setArticles(res.data.results)
      }) 
      .catch(err => console.error("News fetch error:", err));
  }, []);

 return (
    <div className="bg-gradient-to-br mt-10 from-gray-900 via-gray-800 to-black p-8 rounded-3xl shadow-2xl text-white border border-gray-700">
      <h2 className="text-3xl font-extrabold mb-8 flex items-center justify-center gap-3 tracking-wide">
        <GiSattelite /> Latest Space News
      </h2>

      {articles.length === 0 ? (
          <button type="button" className="btn">
              <strong>Loading Space News Data ... </strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
          </button>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 6).map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-400 transition"
            >
              {/* Image with overlay */}
              <div className="relative h-48">
                <img
                  src={article.image_url}
                  alt=""
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-4">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1 flex items-center justify-center gap-1">
                  <IoRocket />
                  {new Date(article.published_at).toLocaleDateString()}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};


export default SpaceNewsPanel;
