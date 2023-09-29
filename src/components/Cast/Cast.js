import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import css from './Cast.module.css';

const headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjljNGQ1OGI3Nzc5Y2E3ZjU0NzQzOGVjMDY1YTdkMiIsInN1YiI6IjYzYWRlYjM2MWY3NDhiMDBjOGI3NTk3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yuBGdZBeGbe4GxiKZv6q5aaLChprjgO_x8cJYcfPPzA',
  accept: 'application/json',
};
export const fetchCredits = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      { headers }
    );
    const data = response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

function Cast() {
  const [cast, setCast] = useState('');
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    async function getMovieCredits() {
      const data = await fetchCredits(id);
      console.log(data.cast);
      setCast(data.cast);
    }
    getMovieCredits();
  }, [id]);

  return (
    <ul className={css.list}>
      {cast.length > 0 ? (
        cast.map(actor => (
          <li className={css.listElement} key={actor.id}>
            {actor.profile_path === null ? (
              <img alt={actor.name} src={'https://placehold.co/200x300/png'} />
            ) : (
              <img
                alt={actor.name}
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              />
            )}

            <p className={css.paragraph}>
              <b>Character:</b> {actor.character}
            </p>
            <p className={css.paragraph}>
              <b>Name:</b> {actor.name}
            </p>
          </li>
        ))
      ) : (
        <li>No cast information available.</li>
      )}
    </ul>
  );
}

export default Cast;
