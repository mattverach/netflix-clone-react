import React from 'react'
import './HomeScreen.css'
import Banner from '../Banner/Banner'
import Nav from '../Nav/Nav'
import requests from '../../Requests'
import Row from '../Row/Row'
import { useNavigate } from 'react-router-dom'
import {useEffect} from 'react'
import Login from '../Login/Login'


function HomeScreen() {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
      console.log('No hay token')
      // TODO: descomentar cuando tenga el backend
      // navigate('/login')
    }
  }, []);

  return (
    <div className='homeScreen'>
        <Nav />
      
        <Banner />

        <Row 
        title='Originales de Netflix'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
        <Row 
        title='Popular'
        fetchUrl={requests.fetchTrending}
        isLargeRow={false}
        />
        <Row 
        title='Comedia'
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={false}
        />
        <Row 
        title='Drama'
        fetchUrl={requests.fetchDramaMovies}
        isLargeRow={false}
        />
        <Row
        title='Accion'
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={false}
        />
        <Row
        title='Terror'
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={false}
        />
        <Row
        title='Romantica'
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={false}
        />
        <Row
        title='Documental'
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={false}
        />
        <Row
        title='Western'
        fetchUrl={requests.fetchWesternMovies}
        isLargeRow={false}
        />
        <Row
        title='Animacion'
        fetchUrl={requests.fetchAnimationMovies}
        isLargeRow={false}
        />
        <Row
        title='Familiar'
        fetchUrl={requests.fetchFamilyMovies}
        isLargeRow={false}
        />
        <Row
        title='Musica'
        fetchUrl={requests.fetchMusicMovies}
        isLargeRow={false}
        />
    


        {/* Footer */}
    </div>
  )
}

export default HomeScreen