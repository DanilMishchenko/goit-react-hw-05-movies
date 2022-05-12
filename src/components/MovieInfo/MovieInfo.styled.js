import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  padding: 40px;
  color: white;
  border-radius: 8px 8px 0 0;
  background: linear-gradient(
      90deg,
      rgba(25, 25, 45, 0.6),
      rgba(20, 20, 35, 0.8)
    ),
    url(${props => props.backdrop});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ImgContainer = styled.div`
  min-width: 300px;
  margin-right: 40px;
  border-radius: 10px;
  overflow: hidden;
`;

export const TitleConrainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.h1`
  margin-bottom: 8px;
`;

export const Release = styled.span`
  font-size: 20px;
`;

export const GenresContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 24px;
`;

export const Genres = styled.h2`
  color: white;
  margin-right: 16px;
  text-shadow: 1px 1px 4px #1d80fb;
`;

export const GenresList = styled.ul`
  display: flex;
`;

export const GenresItem = styled.li`
  margin-right: 4px;

  span {
    font-weight: 700;
  }
`;

export const FactsContainer = styled.div`
  margin-bottom: 16px;
  strong {
    display: block;
  }
`;

export const FactsList = styled.ul`
  li {
    display: flex;
    align-items: flex-end;
    :not(:last-child) {
      margin-bottom: 8px;
    }
  }

  h3 {
    margin-right: 4px;
  }
`;

export const VoteAverage = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

export const UserScoreChart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 50%;
  background: #1d80fb;
  color: white;
  transition: 250ms;

  :hover {
    transform: scale(1.1);
  }

  span {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const Targetline = styled.p`
  text-align: center;
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 400;
  font-style: italic;
`;

export const OverviewContainer = styled.div`
  span {
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: normal;
  }
`;

export const Overview = styled(Genres)`
  margin-bottom: 16px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  border-radius: 0 0 8px 8px;
  background: #1d80fb;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const Link = styled(NavLink)`
  color: #0804f3;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.06;

  :not(:last-child) {
    margin-right: 16px;
  }

  &.active {
    color: white;
    border-bottom: 2px solid white;
  }
`;
