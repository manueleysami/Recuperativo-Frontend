import React from 'react';
import { useQuery } from 'react-query';
import {FaWindowClose} from 'react-icons/fa'
import Nav from './Nav'
import './components.css'

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=3330650ee96720ab5bb53a76eaf7b423&language=en-US';
const IMG_API = 'https://image.tmdb.org/t/p/w500';

function Movies() {
  const { data } = useQuery('movies', () =>
    fetch(API_URL).then((response) => response.json())
  );

  const [selectedMovie, setselectedMovie] = React.useState(null);

  const handleCloseModal = () => setselectedMovie(null);

  if (!data) {
    return <div>Cargando...</div>;
  }

  const moviesPopulares = data.results.slice(0, 12);

  return (
    <div>
    <Nav/>
    <section>
      <h1>Bienvenidos a MoviesTop</h1>
    </section>
      <div id="lista-peliculas">
        {moviesPopulares.map((p) => (
          <div key={p.id} className="movies" onClick={() => setselectedMovie(p)}>
            <img src={`${IMG_API}${p.poster_path}`} alt={p.title} className="peliculas-img" />
            <h1 className="tituloPeli">{p.title}</h1>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="modal-show">
          <div className="modal_content">
            <FaWindowClose onClick={handleCloseModal} />
            <video src={`https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos?api_key=3330650ee96720ab5bb53a76eaf7b423&language=en-US`} alt="" />
            <h1>{selectedMovie.title}</h1>
            <p>{selectedMovie.overview}</p>
            <p>Popularidad: {selectedMovie.popularity}</p>
            <p>Fecha de lanzamiento: {selectedMovie.release_date}</p>
            <p>Votos: {selectedMovie.vote_average}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Movies;
