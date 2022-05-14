import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { searchMoviesByQuery } from 'services/moviesApi';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { PageHeading } from 'components/PageHeading/PageHeading';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const searchMovies = async () => {
      setLoading(true);
      try {
        const foundMovies = await searchMoviesByQuery(query);
        setMovies(foundMovies.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
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
      {loading && <Loader />}
      {movies.length !== 0 && <PageHeading>Search: {query}</PageHeading>}
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </>
  );
}
