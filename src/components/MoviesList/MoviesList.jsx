import { Link } from 'react-router-dom';
import { List } from './MoviesList.styled';

import * as moviesApi from 'services/moviesApi';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <div>
              <img
                src={`${moviesApi.BASE_URL_IMG}${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
              <span>Rating: {movie.release_date}</span>
            </div>
          </Link>
        </li>
      ))}
    </List>
  );
};
