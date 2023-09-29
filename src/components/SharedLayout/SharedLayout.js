import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css'

function SharedLayout() {
  return (
    <>
      <nav className={css.nav_list}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    

      <Outlet />
    </>
  );
}

export default SharedLayout;
