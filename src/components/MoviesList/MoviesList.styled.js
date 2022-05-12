import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    width: calc((100% - 120px) / 4);
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
    :nth-child(4n) {
      margin-right: 0;
    }

    div {
      padding-bottom: 16px;
      color: white;
      text-align: center;
    }

    p {
      margin: 8px 0;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.03em;
    }
  }
`;
