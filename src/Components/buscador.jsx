import { useQuery } from 'react-query';
import { useState } from 'react';
import { debounce } from 'lodash';
import { useMemo } from 'react';


const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=3330650ee96720ab5bb53a76eaf7b423&total_page=1';
const poster = "https://image.tmdb.org/t/p/w1280";


function SearchMovies() {
  const [query, setQuery] = useState('');
  const debouncedSearch = useMemo(() => debounce((value) => setQuery(value), 500), []);

  const { isLoading, data } = useQuery(['movies', query], async () => {
    const res = await fetch(API_URL);
    const json = await res.json();
    return json.results.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()));
  });

  const showList = query !== '' && !isLoading;

  return (
    <div>
      <input
        type="text"
        placeholder="Busca una pelicula..."
        onChange={(e) => debouncedSearch(e.target.value)}
      />
      {showList && (
        isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map((movie) => (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <img src={poster + movie.poster_path}/>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}

export default SearchMovies;
