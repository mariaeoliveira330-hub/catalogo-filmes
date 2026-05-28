import { useEffect, useState } from "react";
import "./App.css";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="container">
      <h1>Catálogo de Filmes</h1>

      <h2 className="section-title">Cadastro de Filmes</h2>

      <MovieForm addMovie={addMovie} />

      <h3 className="list-title">Lista de Filmes</h3>

      <MovieList movies={movies} />
    </div>
  );
}

export default App;