import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from 'services/moviesApi';

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
    // moviesApi.getMoviesById(movieId).then(setMovie).then(console.log(movie));
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <img
            width="100%"
            src={`${moviesApi.BASE_URL_IMG}${movie.backdrop_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <h3>Жанр: </h3>
          <ul>
            {movie.genres.map(elem => (
              <li key={elem.id}>
                <span>{elem.name}</span>
              </li>
            ))}
          </ul>
          <h3>Описание</h3>
          <p>{movie.overview}</p>
        </div>
      )}
    </>
  );
};
