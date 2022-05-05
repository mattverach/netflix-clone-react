import axios from '../../axios';
import React from 'react'
import './Banner.css'
import requests from '../../Requests';
import { useState, useEffect } from 'react';

function Banner() {

    const [movie, setMovie] = useState([]);

    // Se recibe el parametro fetchNetflixOriginals del componente requests y se ejecuta con el metodo axios, se toma un item random del array y se guarda en la variable movie
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
    // Se recibe un string (descripcion de pelicula) y un integer (numero de caracteres) y se retorna un string con el numero de caracteres indicado
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