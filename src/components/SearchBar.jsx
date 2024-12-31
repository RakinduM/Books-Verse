import React from 'react'

const SearchBar = () => {
  return (
    <form className="w-full max-w-lg mb-6 flex">
      <input
        type="text"
        placeholder="Search for books..."
        className="flex-grow p-2 border border-gray-300 rounded-l-md"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar