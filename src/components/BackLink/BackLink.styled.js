import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background-image: linear-gradient(to right, #1d80fb, #cc50ff);
  background-size: 200% 100%;
  transition: all 750ms ease-in-out;
  cursor: pointer;
  outline: none;

  :hover {
    background-position: 100% 0;
    transition: all 750ms ease-in-out;
  }
`;
