import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import BookDetails from "./components/BookDetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BookList/>
      <BookDetails/>
      <Footer/>
    </div>
  );
};

export default App;
