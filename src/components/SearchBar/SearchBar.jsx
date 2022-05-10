import { useState } from 'react';
import { nanoid } from 'nanoid';

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
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor={searchInputId}></label>
      <input
        type="search"
        name="search"
        value={search}
        id={searchInputId}
        onChange={handleChange}
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
};
