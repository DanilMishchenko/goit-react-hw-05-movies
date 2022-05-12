import * as moviesApi from 'services/moviesApi';

import {
  MovieContainer,
  ImgContainer,
  TitleConrainer,
  Title,
  Release,
  GenresList,
  GenresContainer,
  Genres,
  GenresItem,
  Overview,
  OverviewContainer,
  Targetline,
  VoteAverage,
  UserScoreChart,
  FactsContainer,
  FactsList,
} from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  const backdrop = movie.backdrop_path
    ? `${moviesApi.BASE_URL_IMG}${movie.backdrop_path}`
    : 'Лох печальный';

  return (
    <MovieContainer backdrop={backdrop}>
      <ImgContainer>
        <img
          src={`${moviesApi.BASE_URL_IMG}${movie.poster_path}`}
          alt={movie.title}
        />
      </ImgContainer>
      <div>
        <TitleConrainer>
          <Title>{movie.title}</Title>
          <Release>{movie.release_date}</Release>
        </TitleConrainer>
        <GenresContainer>
          <Genres>Genres:</Genres>
          <GenresList>
            {movie.genres.map(elem => (
              <GenresItem key={elem.id}>
                <span>{elem.name} /</span>
              </GenresItem>
            ))}
          </GenresList>
        </GenresContainer>
        <FactsContainer>
          <FactsList>
            <li>
              <h3>Budget:</h3>
              <span>${movie.budget}</span>
            </li>
            <li>
              <h3>Revenue:</h3>
              <span>${movie.revenue}</span>
            </li>
          </FactsList>
        </FactsContainer>
        <VoteAverage>
          <UserScoreChart>
            <span>{movie.vote_average}</span>
          </UserScoreChart>
          <span>Vote average</span>
        </VoteAverage>
        <Targetline>{movie.tagline}</Targetline>
        <OverviewContainer>
          <Overview>Overview</Overview>
          <span>{movie.overview}</span>
        </OverviewContainer>
      </div>
    </MovieContainer>
  );
};
