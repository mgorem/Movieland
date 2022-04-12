import React from 'react'
import { useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=9cdf7297'
const App = () => {

    //function to call movies
    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json();
    
    console.log(data.Search);
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
             value="Superman"
             onChange={() => {}}
            />
            <img
            src={searchIcon}
            alt='search'
            onClick={() => {}}/>
        </div>

        <div className='container'>

        </div>
    </div>
  );
}

export default App;