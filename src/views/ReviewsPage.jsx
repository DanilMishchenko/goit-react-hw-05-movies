import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from 'services/moviesApi';
import { Loader } from 'components/Loader/Loader';
import { ReviewsInfo } from 'components/ReviewsInfo/ReviewsInfo';

export const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const reviewsMovie = async () => {
      setLoading(true);
      try {
        const responce = await moviesApi.getReviews(movieId);
        setReviews(responce);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    reviewsMovie();
  }, [movieId]);

  return <> {loading ? <Loader /> : <ReviewsInfo reviews={reviews} />}</>;
};
