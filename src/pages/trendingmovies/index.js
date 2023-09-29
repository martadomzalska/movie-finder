
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchAPI from 'services/api';

function TrendingMovies() {
      const [movies, setMovies] = useState([]);

      useEffect(() => {
        fetchAPI()
          .then(data => setMovies(data))
          .catch(error => console.error(error));
      }, []);
    
  // console.log(fetchAPI())
// console.log(movies)

  return (
    <>
      <ul>
        {movies.map(movie => (
          <li
            key={movie.id}
          >
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TrendingMovies;
