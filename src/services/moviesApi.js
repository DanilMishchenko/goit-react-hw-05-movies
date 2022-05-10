import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '27c298aef7f6eaea23783ca8aeff6289';

export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

export const getTrendingMovies = async () => {
  const url = `/trending/movie/day?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.results;
};

export const getMoviesById = async movieId => {
  const url = `/movie/${movieId}?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};

export const searchMoviesByQuery = async query => {
  const url = `/search/movie?api_key=${API_KEY}&query=${query}`;
  const response = await axios.get(url);
  return response.data;
};

// &language=en-US&page=1&include_adult=false
