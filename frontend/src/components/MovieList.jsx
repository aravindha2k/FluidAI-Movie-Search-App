import React from 'react';

const MovieList = ({ movies, setSelectedMovie }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.imdbID} onClick={() => {
            console.log("clicked");
            setSelectedMovie(movie)
            }}>
          <h3>{movie.Title} ({movie.Year})</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
