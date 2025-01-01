import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link to={`/book/${book.id}`}>
      <div
        data-aos="fade-up"
        className="bg-white flex flex-col overflow-hidden cursor-pointer hover:-translate-y-3 hover:shadow-md transition-all rounded-md"
      >
        <div className="w-full">
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt="Product 1"
            className="w-full object-cover object-top aspect-[230/307]"
          />
        </div>

        <div className="p-2 flex-1 flex flex-col">
          <div className="flex-1">
            <h2 className="sm:text-base font-semibold text-center">
              {book.volumeInfo.title}
            </h2>
            <p className="mt-1 text-gray-500 text-center">
              {book.volumeInfo.authors?.join(", ")}
            </p>
            <div className="flex flex-wrap justify-between gap-2 mt-2">
              <div className="flex gap-2">
                <h6 className="text-sm sm:text-base font-bold text-gray-800">
                  $10
                </h6>
                <h6 className="text-sm sm:text-base text-gray-500">
                  <strike>$15</strike>
                </h6>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <button className="btn btn-primary w-full">Preview Book</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
