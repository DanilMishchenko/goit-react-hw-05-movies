import PropTypes from 'prop-types';
import { ReviewsContainer, Item, Messege } from './ReviewsInfo.styled';

export const ReviewsInfo = ({ reviews }) => {
  return (
    <ReviewsContainer>
      <ul>
        {reviews.map(element => (
          <Item key={element.id}>
            <div>
              <p>{element.author}</p>
              <span>{element.created_at}</span>
            </div>
            <Messege>{element.content}</Messege>
          </Item>
        ))}
      </ul>
    </ReviewsContainer>
  );
};

ReviewsInfo.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object.isRequired),
};
