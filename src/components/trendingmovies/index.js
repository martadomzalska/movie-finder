import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fetchAPI from 'services/api';
import css from './trendingmovies.module.css';

function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchAPI()
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, []);

  console.log(movies);
  return (
    <div className={css.container}>
      <ul className={css.movielist}>
        {movies.map(movie => (
          <li className={css.title} key={movie.id}>
            <Link
              className={css.title}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              <div className={css.movieContainer}>
                <img
                  alt={movie.original_title}
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                />
                {movie.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingMovies;
