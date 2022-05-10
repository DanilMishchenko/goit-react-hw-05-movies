import { useEffect, useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { searchMoviesByQuery } from 'services/moviesApi';
import { PageHeading } from 'components/PageHeading/PageHeading';

export const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

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
    setQuery(value);
  };

  return (
    <>
      {movies.length === 0 ? (
        <SearchBar onSubmit={handleSubmit} />
      ) : (
        <PageHeading>Search: {query}</PageHeading>
      )}
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </>
  );
};
