import { useQuery } from 'react-query';
import { useState } from 'react';
import { debounce } from 'lodash';
import { useMemo } from 'react';
import Loader from './loader'

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=3330650ee96720ab5bb53a76eaf7b423&total_page=1';
const poster = "https://image.tmdb.org/t/p/w1280";


function SearchMovies() {
  const [query, setQuery] = useState('');
  const debouncedSearch = useMemo(() => debounce((value) => setQuery(value), 1000), []);

  const { isLoading, data } = useQuery(['movies', query], async () => {
    const res = await fetch(API_URL);
    const json = await res.json();
    return json.results.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()));
  });

  const showList = query !== '' && !isLoading;

  return (
    <div>
      <input
        className='font-mono p-1 border-solid border-gray-700 border-2 rounded-xl w-40'
        type="text"
        placeholder="Busca una pelicula..."
        onChange={(e) => debouncedSearch(e.target.value)}
      />
      {showList && (
        isLoading ? (
          <Loader/>
        ) : (
          <ul className='mt-14 flex flex-col items-center justify-center '>
            {data.map((movie) => (
              <li className='' key={movie.id}>
                <img className='h-60' src={poster + movie.poster_path}/>
                <h3 className='font-mono font-semibold text-[18px] mt-3 mb-10'>{movie.title}</h3>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}

export default SearchMovies;
