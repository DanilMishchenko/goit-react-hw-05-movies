import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from 'components/CastList/CastList';
import * as moviesApi from 'services/moviesApi';

export const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const castMovie = async () => {
      try {
        const responce = await moviesApi.getMovieActors(movieId);
        setCast(responce.cast);
      } catch (err) {
        console.log(err.message);
      }
    };
    castMovie();
  }, [movieId]);

  return <>{cast.length !== 0 && <CastList cast={cast} />}</>;
};
