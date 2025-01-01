import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
export const BookContext = createContext();

// Context provider
export const BookProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(false)
  const [cache, setCache] = useState(() => {
    // Initialize the cache from local storage if available
    const storedCache = localStorage.getItem("bookCache");
    return storedCache ? JSON.parse(storedCache) : {};
  });

  // Persist cache to local storage whenever it updates
  useEffect(() => {
    // Fetch trending books on initial load
    fetchBooks("trending");
    localStorage.setItem("bookCache", JSON.stringify(cache));
  }, [cache]);

  // Fetch books by query
  const fetchBooks = async (searchQuery) => {
    setLoading(true)
    if (cache[searchQuery]) {
      setBooks(cache[searchQuery]);
      setLoading(false)
      return;
    }

    try {
      const response = await axios.get(
        `/api/volumes?q=${searchQuery}&key=${import.meta.env.VITE_API_KEY}`
      );
      const results = response.data.items || [];
      setCache((prev) => ({ ...prev, [searchQuery]: results }));
      setBooks(results);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false)
    }
  };

  // Fetch book details
  const fetchBookDetails = async (bookId) => {
    if (cache[bookId]) {
      setSelectedBook(cache[bookId]);
      return;
    }

    try {
      const response = await axios.get(
        `/api/volumes/${bookId}`
      );
      const bookDetails = response.data;
      setCache((prev) => ({ ...prev, [bookId]: bookDetails }));
      setSelectedBook(bookDetails);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  return (
    <BookContext.Provider
      value={{ query, setQuery, books, fetchBooks, selectedBook, fetchBookDetails, loading }}
    >
      {children}
    </BookContext.Provider>
  );
};

// // Custom hook for consuming the context
// export const useBooks = () => {
//   return useContext(BookContext);
// };
