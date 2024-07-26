import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './MovieModal.css';

const API_KEY = 'f550ce99';

const MovieModal = ({ movie, setSelectedMovie }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setMovieDetails(data);
      });
  }, [movie]);

  return (
    <Modal show onHide={() => setSelectedMovie(null)}>
      <Modal.Header closeButton>
        <Modal.Title>{movieDetails?.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {movieDetails ? (
          <>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <img src={movieDetails.Poster} alt={movieDetails.Title} className="img-fluid" />
              <div className="rating-circle">
                <span>{movieDetails.imdbRating}</span>
              </div>
            </div>
            <p><strong>Genre:</strong> {movieDetails.Genre}</p>
            <p><strong>Plot:</strong> {movieDetails.Plot}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setSelectedMovie(null)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieModal;
