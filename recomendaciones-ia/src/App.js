import React, { useEffect, useState } from 'react';

function App() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch('https://recomendaciones-backend.onrender.com/api/peliculas')
      .then(res => res.json())
      .then(data => setPeliculas(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Películas</h1>
      <ul>
        {peliculas.map(pelicula => (
          <li key={pelicula._id}>{pelicula.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
