import { NavLink } from "react-router-dom";

function Movies() {
    return (
      <>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
        <h1>Movies</h1>
      </>
    );
}

export default Movies;