import { useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import css from './movies.module.css';

function Movies() {
  const [queryResults, setQueryResults] = useState(false); //false
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');

 useEffect(() => {

   if (queryParam) {
     fetchMovies(queryParam)
       .then(data => {
         setQueryResults(data);
       })
       .catch(error => {
         console.error('Error fetching movies:', error);
       });
   } else {
     // Jeśli brak parametru zapytania, ustaw listę wyników na pustą
     setQueryResults(false);
   }
 }, [queryParam]);
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.searchQuery.value;
    
    const data = await fetchMovies(queryParam || input);
    setQueryResults(data);
    setSearchParams({ query: input });
  };

  return (
    <>
      <h1 className={css.headline}>Movies</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <input name="searchQuery"></input>
        <button>Search</button>
      </form>

      <ul>
        {queryResults.length > 0
          ? queryResults.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            ))
          : null}
      </ul>
      {queryResults.length === 0 && <p>No results found :(</p>}
    </>
  );
}

export default Movies;
