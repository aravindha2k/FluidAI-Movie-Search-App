import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const MovieList = ({ movies, setSelectedMovie }) => {
  return (
    <Row>
      {movies.map(movie => (
        <Col key={movie.imdbID} md={4} className="mb-4">
          <Card className="movieCard" onClick={() => {
            console.log("clicked");
            setSelectedMovie(movie)
          }}>
            <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Year}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
