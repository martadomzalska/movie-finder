import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Movies from 'pages/movies';
import MovieDetails from 'pages/moviedetails';
// import { getMovieDetails } from 'services/api';


export const App = () => {
  // getMovieDetails()
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
      {/* <Home></Home> */}
    </div>
  );
};
