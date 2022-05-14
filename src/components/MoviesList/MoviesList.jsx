import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { List } from './MoviesList.styled';

import * as moviesApi from 'services/moviesApi';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => {
        const img = movie.poster_path
          ? `${moviesApi.BASE_URL_IMG}${movie.poster_path}`
          : 'https://thumbs.dreamstime.com/b/%D0%BE%D1%82%D1%81%D1%83%D1%82%D1%81%D1%82%D0%B2%D0%B8%D0%B5-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BD%D0%B5%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B5%D0%B1-%D1%83%D0%B7%D0%BB%D0%BE%D0%B2-177641087.jpg';
        return (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{
                from: location,
              }}
            >
              <div>
                <img src={img} alt={movie.title} />
                <p>{movie.title}</p>
                <span>Rating: {movie.release_date}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired),
};
