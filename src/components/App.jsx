import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'views/HomePage';
import { MoviesPage } from 'views/MoviesPage';
import { MovieDetailsPage } from 'views/MovieDetailsPage';
import { NotFoundView } from 'views/NotFoundView';
import { Cast } from 'views/Cast';
import { Reviews } from 'views/Reviews';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="movies" element={<MoviesPage />}></Route>
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundView />}></Route>
      </Route>
    </Routes>
  );
};
