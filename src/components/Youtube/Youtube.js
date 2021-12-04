//fetch video data from youtube api

import React,{useState,useEffect} from 'react';
import './youtube.css'
const API ="AIzaSyDIIxAoo1kzmw0N4kXr8srjX6S6ElNW9bY";
const channelId ='UCVk8weS4S2kJfja72fTxh5A'
const maxResults = 1;
const finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;
// const finalUrl = `https://youtube.googleapis.com/youtube/v3/playlists?channelId=${channelId}&maxResults=${maxResults}&key=${API}`;
// https://youtube.googleapis.com/youtube/v3/playlists?channelId=UCVk8weS4S2kJfja72fTxh5A&maxResults=10&key=AIzaSyDIIxAoo1kzmw0N4kXr8srjX6S6ElNW9bY

const YouTube = () =>{

    const [data, setData] = useState([]); //set data to empty array
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await fetch(finalUrl); //fetching data from youtube api
                const data = await result.json(); //convert data to json
                const resultYt = data.items.map(obj =>  "https://www.youtube.com/embed/" + obj.id.videoId);
                setData(resultYt); //set the data to state
                setLoading(false); //set loading to false
            } catch (error) { //if error occurs
                setError(true); //set error to true
            }
        // console.log(data);

        };
        fetchData();
    }, []);

    return (
        <div className="youtube">
            {loading ? <div>Loading...</div> : null}
            {error ? <div>Error...</div> : null}
            {data.map(item => (
                <div key={item.id}>
                    <iframe
                        title={item.id}
                        width="100%"
                        height="315"
                        src={item}
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
