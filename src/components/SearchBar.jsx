import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const SearchBar = () => {
  const { query, setQuery, fetchBooks } = useContext(BookContext);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks(query);
  };

  return (
    <form className="w-full max-w-lg mb-6 flex" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for books..."
        className="flex-grow p-2 border border-gray-300 rounded-l-md text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
