import axios from './axios';
import React from 'react'
import './Banner.css'
import requests from './Requests';
import { useState, useEffect } from 'react';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
            );
            return request
        }
        fetchData();
    }, [])

    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string

    } 

  return (
    <header className='banner' style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    }}>
        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            
            <div className="banner_buttons">
                <button className="banner_button">Reproducir</button>
                <button className="banner_button">Mas información</button>
            </div>
            <h1 className="banner_desc">
                {truncate(movie?.overview, 150)}
           </h1>
           
        </div>
        <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner;