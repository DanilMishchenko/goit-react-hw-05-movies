import styled from 'styled-components';

export const CastContainer = styled.div`
  display: flex;
  padding: 40px;
  color: white;
  border: 3px solid #1d80fb;
  border-radius: 8px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc((100% - 200px) / 6);
  overflow: hidden;
  margin-right: 40px;
  margin-bottom: 40px;
  border-radius: 10px;
  background-color: #1d80fb;
  box-shadow: 0 5px 10px 1px rgb(0 0 0 / 40%);
  transition: 250ms linear;

  &:hover {
    transform: scale(1.05);
  }
  :nth-child(6n) {
    margin-right: 0;
  }
  p {
    margin: 8px 0 8px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.03em;
  }
`;
