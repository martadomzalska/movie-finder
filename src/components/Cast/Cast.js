import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import css from './Cast.module.css';
import { fetchCredits } from 'services/api';

function Cast() {
  const [cast, setCast] = useState('');
  const location = useLocation();
  const { id } = location.state;
  // location.state.from = '/movies';
  console.log(location.state)
  

  useEffect(() => {
    async function getMovieCredits() {
      const data = await fetchCredits(id);
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
