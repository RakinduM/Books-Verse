import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import axios from "axios";

// Create the context
const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [cache, setCache] = useState(() => {
    const storedCache = localStorage.getItem("bookCache");
    return storedCache ? JSON.parse(storedCache) : {};
  });

  // Ref to store the AbortController for cancellation
  const abortControllerRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("bookCache", JSON.stringify(cache));
  }, [cache]);

  const fetchBooks = async (searchQuery) => {
    // Cancel any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create a new AbortController
    const controller = new AbortController();
    abortControllerRef.current = controller;

    if (cache[searchQuery]) {
      setBooks(cache[searchQuery]);
      return;
    }

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${import.meta.env.VITE_API_KEY}`,
        { signal: controller.signal }
      );
      const results = response.data.items || [];
      setCache((prev) => ({ ...prev, [searchQuery]: results }));
      setBooks(results);
    } catch (error) {
      if (error.name === "CanceledError") {
        console.log("Fetch cancelled");
      } else {
        console.error("Error fetching books:", error);
      }
    }
  };

  const fetchBookDetails = async (bookId) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    if (cache[bookId]) {
      setSelectedBook(cache[bookId]);
      return;
    }

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`,
        { signal: controller.signal }
      );
      const bookDetails = response.data;
      setCache((prev) => ({ ...prev, [bookId]: bookDetails }));
      setSelectedBook(bookDetails);
    } catch (error) {
      if (error.name === "CanceledError") {
        console.log("Fetch cancelled");
      } else {
        console.error("Error fetching book details:", error);
      }
    }
  };

  return (
    <BookContext.Provider value={{ books, fetchBooks, selectedBook, fetchBookDetails }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => {
  return useContext(BookContext);
};
