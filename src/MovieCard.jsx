import React from 'react';


const movie1 = {
    "Title": "Film Title Poem",
    "Year": "2016",
    "imdbID": "tt6947176",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTljYTkzMTYtZmZmMy00OGU1LTk0ODQtNWI4MzQ2MjZhMTg5XkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_SX300.jpg"
  }
  

const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
            <div>{movie.Year}</div>

            <div>
              <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.title}/>
            </div>

            <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
            </div>
          </div>
    );
}

export default MovieCard;