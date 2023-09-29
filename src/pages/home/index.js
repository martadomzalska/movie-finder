import TrendingMovies from 'pages/trendingmovies';
import css from './home.module.css';

function Home() {
  return (
    <>
      <h1 className={css.headline}>Trending today:</h1>
      <TrendingMovies></TrendingMovies>
    </>
  );
}

export default Home;
