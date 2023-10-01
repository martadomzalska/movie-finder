import { useParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getMovieDetails } from 'services/api';
import { Link, Outlet } from 'react-router-dom';
import css from './moviedetails.module.css';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({}); //''
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  useEffect(() => {
    async function fetchMovieDetails() {
      const data = await getMovieDetails(id);
      setMovie({
        id: data.id,
        title: data.title,
        overview: data.overview,
        userScore: data.popularity,
        genres: data.genres,
        poster_path: data.poster_path,
      });
    }

    fetchMovieDetails();
  }, [id]);

  const genres =
    movie && movie.genres && movie.genres.map(genre => genre.name).join(', ');

  return (
    <div className={css.container}>
      <Link to={backLinkHref}>Go back</Link>
      <div className={css.section1}>
        {movie &&
          movie.poster_path && ( //image
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt="Movie poster"
              width="100%"
            />
          )}

        <div className={css.movieInfo}>
          <h1> {movie.title}</h1>
          <p>User score: {movie.userScore} %</p>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <h4>Genres: {genres}.</h4>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <h4 className={css.additionalInfo_headline}>Additional information:</h4>
        <ul>
          <li>
            <Link to="cast" state={{ id: id, from: backLinkHref}}>
              Cast
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              state={{ id: id, from: backLinkHref }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
export default MovieDetails;
