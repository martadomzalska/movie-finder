
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fetchAPI from 'services/api';

function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  // console.log(location.state)

      useEffect(() => {
        fetchAPI()
          .then(data => setMovies(data))
          .catch(error => console.error(error));
      }, []);

  return (
    <>
      <ul>
        {movies.map(movie => (
          <li
            key={movie.id}
          >
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TrendingMovies;
