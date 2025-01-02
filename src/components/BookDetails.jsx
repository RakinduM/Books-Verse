import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookContext } from "../contexts/BookContext";
import Layout from "./layout/Layout";
import DOMPurify from "dompurify";
import Error from "./Error";
import Loader from "./Loader";

const BookDetails = () => {
  const { id } = useParams();
  const { selectedBook, fetchBookDetails, loading } = useContext(BookContext);

  useEffect(() => {
    if (id) {
      fetchBookDetails(id);
    }
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!selectedBook) {
    return <Error />;
  }

  const filteredDescription = DOMPurify.sanitize(
    selectedBook.volumeInfo.description || "No description available for this book"
  );

  return (
    <Layout>
      <div className="font-[sans-serif] p-4  py-11">
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg max-w-xl mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 max-lg:gap-12 max-sm:gap-8">
            <div className="w-full lg:sticky top-0 lg:col-span-2">
              <div className="flex flex-row gap-2">
                <div className="flex-1">
                  <img
                    src={selectedBook.volumeInfo.imageLinks.medium}
                    alt={selectedBook.volumeInfo.title || "Book Cover"}
                    className="w-full aspect-[750/800] object-top object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:col-span-3">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedBook.volumeInfo.title}
                </h3>
                <div className="flex mt-2">
                  <p className="text-sm text-gray-800">
                    {selectedBook.volumeInfo.authors?.join(", ") || "Author Unknown"}
                  </p>
                </div>
                <div className="flex items-center flex-wrap gap-4 mt-6">
                  <div className="flex items-center space-x-1 mt-2">
                    <svg
                      className="w-4 h-4 fill-purple-800"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-purple-800"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-purple-800"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-purple-800"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  </div>
                </div>
              </div>

              <hr className="my-6 border-gray-300" />
              <div
                dangerouslySetInnerHTML={{ __html: filteredDescription }}
              ></div>

              <hr className="my-6 border-gray-300" />
              <button
                className="btn btn-primary w-full"
                onClick={() =>
                  window.open(selectedBook.volumeInfo.previewLink, "_blank")
                }
              >
                Preview Book
              </button>
            </div>
          </div>
        </div>

        <div data-aos="fade-right" className="mt-12 bg-base-300 px-6 py-12">
          <div className="xl:max-w-screen-xl max-w-screen-lg mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-5">
              BOOK INFORMATION
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-gray-800 text-sm font-bold">Title:</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {selectedBook.volumeInfo.title}
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-800 text-sm font-bold">Author:</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {selectedBook.volumeInfo.authors?.join(", ") || "Author Unknown"}
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-800 text-sm font-bold">
                    Publisher:
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {selectedBook.volumeInfo.publisher || "Publisher Unkown"}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-gray-800 text-sm font-bold">
                    Published Date:
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {selectedBook.volumeInfo.publishedDate || "Published Date Unknown"}
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-800 text-sm font-bold">
                    Page Count:
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {selectedBook.volumeInfo.pageCount || "Page Count Unavailabe"}
                  </p>
                </div>

                <div>
                  <h3 class="text-gray-800 text-sm font-bold">Categories:</h3>
                  <ul class="list-disc pl-5 mt-2 space-y-2 text-sm text-gray-500">
                    {selectedBook.volumeInfo.categories.map((category) => (
                      <li>{category}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetails;
