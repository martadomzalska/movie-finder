import { ReactComponent as Search } from './icons8-search.svg';
import css from './SearchBar.module.css';

function SearchBar() {
  return (
    <>
      <input
        className={css.input}
        name="searchQuery"
        placeholder="Search a movie you want"
      ></input>
      <Search className={css.button} />
    </>
  );
}

export default SearchBar;
