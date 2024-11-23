import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import Logo from 'components/Logo/Logo';
import css from './SharedLayout.module.css';

function SharedLayout() {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <nav className={css.nav_list}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          <NavLink className={css.link} to="/movies">
            Movies
          </NavLink>
        </nav>
        <Logo />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
