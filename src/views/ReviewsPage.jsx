import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsInfo } from 'components/ReviewsInfo/ReviewsInfo';
import * as moviesApi from 'services/moviesApi';

export const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const reviewsMovie = async () => {
      try {
        const responce = await moviesApi.getReviews(movieId);
        setReviews(responce);
      } catch (err) {
        console.log(err.message);
      }
    };
    reviewsMovie();
  }, [movieId]);

  return <ReviewsInfo reviews={reviews} />;
};
