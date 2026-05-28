function MovieList({ movies }) {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <div className="card" key={movie.id}>
          <img
            src={movie.image}
            alt={movie.title}
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/220x320?text=Sem+Imagem";
            }}
          />

          <div className="card-content">
            <h2>{movie.title}</h2>

            <p>
              <strong>Categoria:</strong> {movie.category}
            </p>

            <p>
              <strong>Ano:</strong> {movie.year}</p>

            <p>
              <strong>Nota:</strong> {movie.rating}
            </p>

            <p>{movie.synopsis}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;