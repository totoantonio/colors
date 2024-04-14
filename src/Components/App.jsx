import React from "react";

function Header({ scrollToProducts }) {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="./Butterfly.png"
          className="w-full lg:w-auto max-w-md lg:max-w-lg rounded-lg"
        />
        <div>
          <h1 className="flex items-center justify-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500">
            Dive Into a World of Color and Creativity
          </h1>

          <p className="py-6">
            Welcome to Colorful Imagination, your premier destination for
            exclusive coloring books designed to inspire artists of all ages.
            From intricate patterns to breathtaking landscapes, our collections
            are carefully curated to spark joy, relaxation, and creativity.
            Embark on a colorful journey that transforms blank pages into
            masterpieces.
          </p>
          <button className="btn btn-primary" onClick={scrollToProducts}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
