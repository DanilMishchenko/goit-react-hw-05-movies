import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from 'services/moviesApi';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

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

  return <>{movie && <MovieInfo movie={movie} />}</>;
};
