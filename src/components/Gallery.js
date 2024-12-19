import React, { useState } from "react";

const Gallery = () => {
  const [category, setCategory] = useState("All");
  const [isSlidingOut, setIsSlidingOut] = useState(false);

  const imagePaths = {
    All: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    Bedroom: [1, 2, 3],
    Garden: [4, 5, 6, 7],
    Kitchen: [8, 9, 10],
    Pool: [11, 12],
  };

  const handleCategoryChange = (newCategory) => {
    setIsSlidingOut(true);
    setTimeout(() => {
      setCategory(newCategory);
      setIsSlidingOut(false);
    }, 500);
  };

  return (
    <div className="p-8 bg-white text-center">
      {/* Header Section */}
      <h1 className="text-4xl font-extrabold text-purple-700 mb-8">Gallery</h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["All", "Bedroom", "Garden", "Kitchen", "Pool"].map((item) => (
          <button
            key={item}
            onClick={() => handleCategoryChange(item)}
            className={`py-2 px-6 text-lg font-medium border rounded-full transition duration-300 shadow-sm ${
              category === item
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Gallery Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {imagePaths[category].map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 ${
              isSlidingOut ? "animate-fadeOut" : "animate-fadeIn"
            }`}
          >
            <img
              src={require(`../assets/images/${image}.jpeg`)}
              alt={`Category ${category} Image ${image}`}
              className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
