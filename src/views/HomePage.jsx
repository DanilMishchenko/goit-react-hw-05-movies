import { MoviesList } from 'components/MoviesList/MoviesList';
import { Heading } from 'components/PageHeading/PageHeading.styled';
import { useEffect, useState } from 'react';
import * as moviesApi from 'services/moviesApi';

import { Loader } from 'components/Loader/Loader';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const trendingMovies = async () => {
      setLoading(true);
      try {
        const moviesCollection = await moviesApi.getTrendingMovies();
        setMovies(moviesCollection);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    trendingMovies();
  }, []);

  return (
    <div>
      <Heading>Trending today</Heading>
      {loading ? <Loader /> : <MoviesList movies={movies} />}
    </div>
  );
}
