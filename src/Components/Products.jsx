import React, { useState } from "react";

// Example card data
const cardsData = [
  {
    id: 1,
    title: "Flowers",
    description: "9 Pages of flower inspired coloring book.",
    imgSrc: "./Flowers.webp",
  },
  {
    id: 2,
    title: "Fish",
    description: "Dive into the deep blue sea with this fish coloring book.",
    imgSrc: "./Fish.webp",
  },
  {
    id: 3,
    title: "Mountains",
    description: "Color the towering mountains and serene landscapes.",
    imgSrc: "./Flowers.webp",
  },
  {
    id: 4,
    title: "Cities",
    description: "Explore cityscapes and urban scenes in this coloring book.",
    imgSrc: "./Fish.webp",
  },
];

function Products() {
  // Initialize state to track ratings for each card independently, keyed by card id.
  const [ratings, setRatings] = useState({});

  // Handler to update the rating for a specific card
  const handleRatingChange = (cardId, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [cardId]: value,
    }));
  };

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardsData.map((card) => (
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
                  {["300", "400", "500", "600", "700"].map(
                    (color, colorIndex) => (
                      <input
                        key={color}
                        type="radio"
                        name={`rating-${card.id}`}
                        className={`mask mask-heart bg-red-${color}`}
                        value={colorIndex + 1} // Value assigned based on color index for simplicity
                        checked={ratings[card.id] === `${colorIndex + 1}`} // Check if this radio button should be checked based on the card's rating state
                        onChange={() =>
                          handleRatingChange(card.id, `${colorIndex + 1}`)
                        } // Handle change to update the specific card's rating
                      />
                    )
                  )}
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
