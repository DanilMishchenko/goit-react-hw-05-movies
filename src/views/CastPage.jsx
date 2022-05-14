import { useEffect, useState } from 'react';
import * as moviesApi from 'services/moviesApi';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { CastList } from 'components/CastList/CastList';

export const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const castMovie = async () => {
      setLoading(true);
      try {
        const responce = await moviesApi.getMovieActors(movieId);
        setCast(responce.cast);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    castMovie();
  }, [movieId]);

  return <>{loading ? <Loader /> : <CastList cast={cast} />}</>;
};
