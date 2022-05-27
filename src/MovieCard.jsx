import React from 'react';


const movie1 = {
    "Title": "Film Title Poem",
    "Year": "2016",
    "imdbID": "tt6947176",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTljYTkzMTYtZmZmMy00OGU1LTk0ODQtNWI4MzQ2MjZhMTg5XkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_SX300.jpg"
  }
  

const MovieCard = ({ movie1 }) => {
    return (
        <div className='movie'>
            <div>{movie1.Year}</div>

            <div>
              <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.title}/>
            </div>

            <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
            </div>
          </div>
    );
}

export default MovieCard;