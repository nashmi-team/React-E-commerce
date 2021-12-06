//fetch video data from youtube api
import React, { useState, useEffect } from "react";
import "./youtube.css";

const API = "AIzaSyDIIxAoo1kzmw0N4kXr8srjX6S6ElNW9bY";
const channelId = "UCCejg-zx3R3OXFItvJxVvoA";
const maxResults = 1;
const finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;

const YouTube = () => {
  const [data, setData] = useState([]); //set data to empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetch(finalUrl); //fetching data from youtube api
        const data = await result.json(); //convert data to json
        //map through data and return the video id
        const resultYt = data.items.map((item) => {
          return item.id.videoId;
        });
        setData(resultYt);
        setLoading(false); //set loading to false
      } catch (error) {
        //if error occurs
        setError(true); //set error to true
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container youTube">
      <div className="title-section text-center mb-5 title">
        <h2 className="">Our Channel On Youtube</h2>
      </div>
      {loading ? <div>Loading...</div> : null}
      {error ? <div>Error...</div> : null}
      {data.map((item, index) => (
        <div key={index}>
          <iframe
            title={item.id}
            key={item.id}
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${item}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
};

export default YouTube;
