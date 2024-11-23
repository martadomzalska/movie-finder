import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import css from './Home.module.css';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div className={css.container}>
      <Helmet>
        <title>{`🎞️ Movie Finder`}</title>
      </Helmet>
      <TrendingMovies></TrendingMovies>
    </div>
  );
}

export default Home;
