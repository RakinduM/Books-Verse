import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  AOS.init()

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
