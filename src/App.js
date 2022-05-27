import React from 'react'
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import searchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com?apikey=9cdf7297"

const movie1 = {
  "Title": "Film Title Poem",
  "Year": "2016",
  "imdbID": "tt6947176",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNTljYTkzMTYtZmZmMy00OGU1LTk0ODQtNWI4MzQ2MjZhMTg5XkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_SX300.jpg"
}




const App = () => {

  const [movies, setMovies] = useState([]);
    //function to fetch movies from the API
    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json();
    
    setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Superman');
    }, []);

  return (
    <div className='app'>
        <h1>MoviePalace</h1>


        <div className='search'>
            <input
             placeholder='Search for movies'
             value="Search by movie name"
             onChange={() => {}}
            />
            <img
            src={searchIcon}
            alt='search'
            onClick={() => {}}/>
        </div>

        {
          movies ?.length > 0
          ?(
            <div className='container'>
              <MovieCard movie1={movies[0]} />
            </div>
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
        }
        
    </div>
  );
}

export default App;

/**
 * using async means it takes time to fetch these movies
 * 
 */