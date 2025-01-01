import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="hero min-h-screen carousel-item"
        style={{
          backgroundImage: "url(/images/hero-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Every Book is a New Beginning
            </h1>
            <p className="mb-5">Start your next adventure with just a click.</p>
            <SearchBar />
          </div>
        </div>
      </div>
      <div
        id="slide2"
        className="hero min-h-screen carousel-item"
        style={{
          backgroundImage: "url(/images/hero-2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Find Stories That Speak to You
            </h1>
            <p className="mb-5">
              Every book has a voice, a story, and a world to share. Let us help
              you find the perfect one to match your mood and interests.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
