import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import BookDetails from "./components/BookDetails";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/book/:id" element={<BookDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
