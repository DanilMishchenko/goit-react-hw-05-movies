import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 24px;
  margin-bottom: 16px;
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

export const SearchButton = styled.button`
  width: 96px;
  height: 32px;
  border: none;
  border-radius: 24px;
  color: white;
  background-image: linear-gradient(to right, #1d80fb, #cc50ff);
  background-size: 200% 100%;
  transition: all 750ms ease-in-out;
  cursor: pointer;

  :hover {
    background-position: 100% 0;
    transition: all 750ms ease-in-out;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding-left: 16px;
  padding-right: 16px;
`;
