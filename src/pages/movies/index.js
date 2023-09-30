import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjljNGQ1OGI3Nzc5Y2E3ZjU0NzQzOGVjMDY1YTdkMiIsInN1YiI6IjYzYWRlYjM2MWY3NDhiMDBjOGI3NTk3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yuBGdZBeGbe4GxiKZv6q5aaLChprjgO_x8cJYcfPPzA',
  accept: 'application/json',
};
async function fetchMovies(query) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, { headers });
    const data = await response.json()
     return data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
function Movies() {
  const [queryResults, setQueryResults] = useState(false);
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.searchQuery.value;
    const data = await fetchMovies(input);
    setQueryResults(data)
  }

    return (
      <>
        <h1>Movies</h1>
        <form onSubmit={handleSubmit}>
          <input name="searchQuery"></input>
          <button>Search</button>
        </form>
       
        <ul>{queryResults ? ( queryResults.map(movie => (
          <li key={movie.id}><Link to={`${movie.id}`} state={{ from: location }}>{movie.title}</Link></li>
        ))) : (null)}</ul>
        {queryResults.length === 0 && <p>No results found :(</p>}
      </>
    );
}

export default Movies;