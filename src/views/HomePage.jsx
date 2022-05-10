import { MoviesList } from 'components/MoviesList/MoviesList';
import { Heading } from 'components/PageHeading/PageHeading.styled';
import { useEffect, useState } from 'react';
import * as moviesApi from 'services/moviesApi';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const trendingMovies = async () => {
      try {
        const moviesCollection = await moviesApi.getTrendingMovies();
        setMovies(moviesCollection);
      } catch (err) {
        console.log(err.message);
      }
    };
    trendingMovies();
  }, []);

  return (
    <div>
      <Heading>Trending today</Heading>
      <MoviesList movies={movies} />
    </div>
  );
};
