import React, { useEffect, useState } from 'react';

const API_KEY = 'f550ce99';

const MovieModal = ({ movie, setSelectedMovie }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setMovieDetails(data);
      });
  }, [movie]);

  return (
    <div className="modal">
      <div className="modal-content">
        {movieDetails ? (
          <>
            <h2>{movieDetails.Title}</h2>
            <p><strong>Genre:</strong> {movieDetails.Genre}</p>
            <p><strong>Plot:</strong> {movieDetails.Plot}</p>
            <p><strong>Ratings:</strong> {movieDetails.imdbRating}</p>
            <button onClick={() => setSelectedMovie(null)}>Close</button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MovieModal;
