import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// import { getMovieDetails } from 'services/api';
// import { useState, useEffect } from 'react';
const headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjljNGQ1OGI3Nzc5Y2E3ZjU0NzQzOGVjMDY1YTdkMiIsInN1YiI6IjYzYWRlYjM2MWY3NDhiMDBjOGI3NTk3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yuBGdZBeGbe4GxiKZv6q5aaLChprjgO_x8cJYcfPPzA',
  accept: 'application/json',
};

const getMovieDetails = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        headers,
      }
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState('');

useEffect(() => {
  async function fetchMovieDetails() {
      const data = await getMovieDetails(id);
    setMovie({
        title: data.title,
        overview: data.overview,
        userScore: data.popularity,
        genres: data.genres,
      });
  }

  fetchMovieDetails();
}, [id]);
console.log(movie.genres)
  return (
    <>
      <h1>Movie: {movie.title}</h1>
          <p>User score:{movie.userScore} %</p>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <h4>Genres: </h4>
          <hr />
          <h4>Additional information:
              <ul>
                  <li>Cast</li>
                  <li>Reviews</li>
              </ul>
          </h4>
    </>
  );
}
export default MovieDetails;
