import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const API_KEY = 'f550ce99';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=batman&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  }, []);

  const handleSearch = () => {
    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  };

  return (
    <div className="App container">
      <h1 className="my-4">Movie Search App</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
      {selectedMovie && <MovieModal movie={selectedMovie} setSelectedMovie={setSelectedMovie} />}
    </div>
  );
}

export default App;
