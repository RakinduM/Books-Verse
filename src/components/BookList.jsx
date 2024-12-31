import React from "react";
import BookCard from "./BookCard";

const BookList = ({books}) => {
  return (
    <div class="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-3xl bg-base-200">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
