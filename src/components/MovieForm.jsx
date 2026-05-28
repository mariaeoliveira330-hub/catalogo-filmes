import { useState } from "react";

function MovieForm({ addMovie }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMovie = {
      title,
      category,
      year,
      rating,
      image,
      synopsis,
    };

    const response = await fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    });

    const data = await response.json();

    // 🔥 garante que a imagem não se perca
    addMovie({
      title,
      category,
      year,
      rating,
      image,
      synopsis,
      id: data.id,
    });

    // limpa formulário
    setTitle("");
    setCategory("");
    setYear("");
    setRating("");
    setImage("");
    setSynopsis("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Título</label>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Categoria</label>
      <input
        type="text"
        placeholder="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <label>Ano</label>
      <input
        type="number"
        placeholder="Ano"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <label>Nota</label>
      <input
        type="number"
        placeholder="Nota"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <label>URL da imagem</label>
      <input
        type="text"
        placeholder="URL da imagem"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <label>Sinopse</label>
      <textarea
        placeholder="Sinopse"
        value={synopsis}
        onChange={(e) => setSynopsis(e.target.value)}
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default MovieForm;