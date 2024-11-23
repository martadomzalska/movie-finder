import { Link } from 'react-router-dom';
import css from './Logo.module.css';
import { ReactComponent as MovieFinder } from './MovieFinder.svg';

function Logo() {
  return (
    <div className={css.logo}>
      <Link to="/">
        <MovieFinder />
      </Link>
    </div>
  );
}

export default Logo;
