import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import * as moviesApi from 'services/moviesApi';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedMovie = async () => {
      try {
        const movie = await moviesApi.getMoviesById(movieId);
        setMovie(movie);
      } catch (err) {
        console.log(err.message);
      }
    };
    selectedMovie();
  }, [movieId]);

  const handleClick = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <>
      {movie && <MovieInfo movie={movie} onClick={handleClick} />}
      <Outlet />
    </>
  );
};
