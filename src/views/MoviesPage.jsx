import { useEffect, useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { searchMoviesByQuery } from 'services/moviesApi';
import { PageHeading } from 'components/PageHeading/PageHeading';
import { useSearchParams } from 'react-router-dom';

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const searchMovies = async () => {
      try {
        const foundMovies = await searchMoviesByQuery(query);
        setMovies(foundMovies.results);
      } catch (err) {
        console.log(err);
      }
    };

    searchMovies();
  }, [query]);

  const handleSubmit = value => {
    setSearchParams({ query: `${value}` });
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {movies.length !== 0 && <PageHeading>Search: {query}</PageHeading>}
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </>
  );
};
