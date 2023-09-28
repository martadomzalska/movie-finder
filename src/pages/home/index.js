import { NavLink } from 'react-router-dom';
import TrendingMovies from 'pages/trendingmovies';

function Home() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <h1>Trending today:</h1>
      <TrendingMovies></TrendingMovies>
    </>
  );
}

export default Home;
