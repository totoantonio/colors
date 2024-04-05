import React, { useState } from "react";

function Products() {
  const [ratings, setRatings] = useState({});

  const updateRating = (index, rating) => {
    setRatings((currentRatings) => ({
      ...currentRatings,
      [index]: rating,
    }));
  };

  // Expanded cards data for 8 cards
  const cards = [
    {
      id: 1,
      imgSrc: "./Flowers.webp",
      title: "Flowers",
      description: "9 Pages of flower inspired coloring book.",
    },
    {
      id: 2,
      imgSrc: "./Fish.webp",
      title: "Fish",
      description: "Explore the underwater world with this fish coloring book.",
    },
    // Replicating the above cards to make up 8 cards in total
    // Ideally, you'd have unique data for each card
    {
      id: 3,
      imgSrc: "./Flowers.webp",
      title: "Flowers",
      description: "9 Pages of flower inspired coloring book.",
    },
    {
      id: 4,
      imgSrc: "./Fish.webp",
      title: "Fish",
      description: "Explore the underwater world with this fish coloring book.",
    },
    // Adding 4 more cards to create a second row
    {
      id: 5,
      imgSrc: "./Mountain.webp",
      title: "Flowers",
      description: "9 Pages of flower inspired coloring book.",
    },
    {
      id: 6,
      imgSrc: "./Fish.webp",
      title: "Fish",
      description: "Explore the underwater world with this fish coloring book.",
    },
    {
      id: 7,
      imgSrc: "./Flowers.webp",
      title: "Flowers",
      description: "9 Pages of flower inspired coloring book.",
    },
    {
      id: 8,
      imgSrc: "./Fish.webp",
      title: "Fish",
      description: "Explore the underwater world with this fish coloring book.",
    },
  ];

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="card max-w-sm mx-auto bg-base-100 shadow-xl"
          >
            <figure>
              <img src={card.imgSrc} alt={card.title} />
            </figure>
            <div className="card-body bg-white dark:bg-gray-700 rounded-b-lg">
              <h2 className="card-title text-gray-900 dark:text-gray-50">
                {card.title}
              </h2>
              <p className="leading-none text-gray-900 dark:text-gray-200">
                {card.description}
              </p>
              <div className="flex justify-between items-center w-full">
                <div className="rating flex gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <input
                      key={`${card.id}-${i}`}
                      type="radio"
                      name={`rating-${card.id}`}
                      className={`mask mask-heart bg-red-${300 + i * 100}`}
                      value={i + 1}
                      checked={ratings[card.id] === `${i + 1}`}
                      onChange={() => updateRating(card.id, i + 1)}
                    />
                  ))}
                </div>
                <button className="btn btn-primary dark:bg-blue-500 dark:text-white dark:border-transparent">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
