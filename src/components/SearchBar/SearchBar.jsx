import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import {
  Container,
  SearchForm,
  SearchButton,
  SearchInput,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const searchInputId = nanoid(4);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    resetForm();
  };

  const resetForm = () => {
    setSearch('');
  };

  return (
    <Container>
      <SearchForm autoComplete="off" onSubmit={handleSubmit}>
        <SearchInput
          type="search"
          name="search"
          value={search}
          id={searchInputId}
          onChange={handleChange}
          placeholder="Search movies"
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </Container>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
