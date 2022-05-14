import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Button } from './BackLink.styled';

export const BackButton = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <HiArrowNarrowLeft size="24px" />
    </Button>
  );
};
