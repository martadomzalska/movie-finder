import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('pages/home'));
const Movies = lazy(() => import('pages/movies'));
const MovieDetails = lazy(() => import('pages/moviedetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
        </Routes>
    </div>
  );
};
