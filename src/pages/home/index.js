import TrendingMovies from 'components/trendingmovies';
import css from './home.module.css';

function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.headline}>Trending today:</h1>
      <TrendingMovies></TrendingMovies>
    </div>
  );
}

export default Home;
