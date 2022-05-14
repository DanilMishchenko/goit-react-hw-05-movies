import { Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { Layout } from './Layout/Layout';
import { CastPage } from 'views/CastPage';
import { ReviewsPage } from 'views/ReviewsPage';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() =>
  import('../views/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('../views/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    '../views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  )
);
const NotFoundView = lazy(() =>
  import('../views/NotFoundView' /* webpackChunkName: "not-found-page" */)
);

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
