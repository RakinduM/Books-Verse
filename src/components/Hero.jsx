import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="carousel carousel-end w-full">
      <div
        id="slide1"
        className="hero min-h-screen carousel-item"
        style={{
          backgroundImage:
            "url(/images/hero-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Every Book is a New Beginning</h1>
            <p className="mb-5">
            Start your next adventure with just a click.
            </p>
            <SearchBar/>
          </div>
        </div>
      </div>
      <div
        id="slide2"
        className="hero min-h-screen carousel-item"
        style={{
          backgroundImage:
            "url(/images/hero-2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
