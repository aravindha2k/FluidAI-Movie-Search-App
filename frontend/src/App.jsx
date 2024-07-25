import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';

const API_KEY = 'f550ce99';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=popular&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.Search) {
          setMovies(data.Search);
          console.log(movies);
        }
      });
  };

  return (
    <div className="App">
      <h1>Movie Searching App</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
      {selectedMovie && <MovieModal movie={selectedMovie} setSelectedMovie={setSelectedMovie} />}
    </div>
  );
}

export default App;

