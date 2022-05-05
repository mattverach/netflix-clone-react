import React from 'react'
import './Row.css'
import { useState, useEffect } from 'react';
import axios from "../../axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = React.useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect (() => {
        async function fetchData() {
            // Se recibe el parametro fetchUrl del componente Row y se ejecuta con el metodo axios, lo que retorna lo guarda en la variable movies
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className='row_posters'>

        {/*Se recorre el array de peliculas (movies) para mostrar las imagenes en la pagina asignarle una clase dependiendo si es una fila grande o no*/}
        {movies.map(movie => (
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} key={movie.id} src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} alt={movie.name} />
            )
            ))}
    </div>
    </div>
  )
}

export default Row