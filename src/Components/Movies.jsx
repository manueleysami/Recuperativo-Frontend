import React from 'react';
import { useQuery } from 'react-query';
import {FaWindowClose} from 'react-icons/fa'
import Nav from './Nav'

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
    <div className=''>
    <Nav/>
    <section>
      <h2 className='text-2xl w-full font-BrunoSC p-7 bg-slate-700 text-white sm:text-3xl'>Peliculas Populares</h2>
      

    </section>
      <div>
      
        {moviesPopulares.map((p) => (

          <div key={p.id} className="flex flex-col items-center pt-5" onClick={() => setselectedMovie(p)}>
            <h1 className="font-bold font-PTSans text-[18px] mt-3 mb-2 text-center sm:text-3xl">{p.title}</h1>
            <img src={`${IMG_API}${p.poster_path}`} alt={p.title} className="h-72 rounded-lg sm:h-[40vh]" />
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="fixed h-[100vh] w-[100%] top-0 left-0 flex items-center justify-center">
          <div className="bg-slate-400 rounded-2xl p-5 font-PTSans h-[55vh] sm:text-3xl">
            <FaWindowClose className='text-2xl sm:text-5xl' onClick={handleCloseModal} />
            <video src={selectedMovie.video} />
            <h1>{selectedMovie.title}</h1>
            <p>{selectedMovie.overview}</p>
            <p>Popularidad: {selectedMovie.popularity}</p>
            <p>Fecha de lanzamiento: {selectedMovie.release_date}</p>
            <p>Votos: {selectedMovie.vote_average}</p>
          </div>
        </div>
      )}

      <footer className='h-14 p-2 flex items-center bg-slate-700 mt-10 sm:h-24'>
        <p className='text-white font-PTSans sm:text-2xl'>Creado por Manuel Eysami</p>
      </footer>
    </div>
  );
}

export default Movies;
