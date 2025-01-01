import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import BookList from "../components/BookList";
import Loader from "../components/Loader";

const Home = () => {
  const { books, loading } = useContext(BookContext);

  return (
    <Layout>
      <Hero />
      {loading ? <Loader /> : <BookList books={books} />}
    </Layout>
  );
};

export default Home;
