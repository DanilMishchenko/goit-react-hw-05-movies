import { useLocation, useNavigate } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Button } from './BackLink.styled';

export const BackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <Button type="button" onClick={onGoBack}>
      <HiArrowNarrowLeft size="24px" />
    </Button>
  );
};
