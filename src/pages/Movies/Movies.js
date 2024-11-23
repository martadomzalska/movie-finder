import { useState, useEffect } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
import placeholder from './movies-placeholder.bmp';
import { Helmet } from 'react-helmet';

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
    <div className={css.container}>
      <Helmet>
        <title>{`🎬 Movies`}</title>
      </Helmet>
      <form className={css.form} onSubmit={handleSubmit}>
        <SearchBar />
      </form>

      <ul className={css.movielist}>
        {queryResults.length > 0
          ? queryResults.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  <div className={css.movieContainer}>
                    {movie.poster_path === null ? (
                      <img
                        className={css.img}
                        alt={movie.original_title}
                        src={placeholder}
                      />
                    ) : (
                      <img
                        className={css.img}
                        alt={movie.original_title}
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      />
                    )}
                  </div>
                </Link>
              </li>
            ))
          : null}
      </ul>
      {queryResults.length === 0 && <p>No results found :(</p>}
    </div>
  );
}

export default Movies;
