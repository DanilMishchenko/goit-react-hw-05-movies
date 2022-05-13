import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  padding: 40px;
  color: white;
  border: 3px solid #1d80fb;
  border-radius: 8px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 24px;
  border-radius: 10px;
  background-color: #1d80fb;
  box-shadow: 0 5px 10px 1px rgb(0 0 0 / 40%);

  :not(:last-child) {
    margin-bottom: 32px;
  }

  div {
    margin-right: 24px;
    text-align: center;
  }

  p {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.03em;
  }
`;

export const Messege = styled.span`
  padding-left: 24px;
  border-left: 2px solid white;
  word-spacing: 2px;
  line-height: 1.3;
`;
