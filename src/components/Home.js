import React, { useState } from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/images/home1.png";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Home = () => {
  const storyImages = [
    "q.png",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
  ];
  const galleryImages = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
  ];
  const blogImages = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(1);

  const packageDetails = {
    1: {
      title: "Single Bedroom House",
      image: "1.jpeg", // Correct path to image
      description: [
        "Modern design",
        "Land: 80m²",
        "Built-up: 35m²",
        "Ready in 3 months",
      ],
    },
    2: {
      title: "Bedroom House With Pool",
      image: "2.jpeg", // Correct path to image
      description: [
        "Luxury pool",
        "Built-up: 50m²",
        "Land: 100m²",
        "Exclusive neighborhood",
      ],
    },
    3: {
      title: "Two Bedroom House With Pool",
      image: "3.jpeg", // Correct path to image
      description: [
        "Perfect for families",
        "Built-up: 80m²",
        "Land: 150m²",
        "Relaxation guaranteed",
      ],
    },
  };

  const handlePrevious = () =>
    setCurrentImageIndex((prev) =>
      prev === 0 ? storyImages.length - 1 : prev - 1
    );
  const handleNext = () =>
    setCurrentImageIndex((prev) =>
      prev === storyImages.length - 1 ? 0 : prev + 1
    );

  const handleImageClick = (id) => setSelectedPackage(id);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex justify-center items-center text-white text-center"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div className="flex gap-6 mt-20">
          <button className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition shadow-md">
            View Packages
          </button>
          <button className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition shadow-md">
            Contact Us
          </button>
        </div>
      </div>

      {/* Packages Section */}
      <section className="py-8 px-4 bg-gray-50">
        <h2 className="text-center text-lg text-gray-500 uppercase mb-2">
          Our Packages
        </h2>
        <h3 className="text-center text-2xl font-bold mb-4">
          Choose The Best For You
        </h3>
        <p className="text-center text-gray-600 mb-6 text-sm">
          We offer simple, customizable & affordable building packages, so let’s
          make your dream come true.
        </p>

        {/* Package Tabs */}
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {Object.keys(packageDetails).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedPackage(Number(key))}
              className={`py-1.5 px-3 text-xs font-semibold rounded-lg transition ${
                selectedPackage === Number(key)
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {packageDetails[key].title}
            </button>
          ))}
        </div>

        {/* Package Content */}
        <div className="container mx-auto max-w-screen-md grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.keys(packageDetails).map((key) => (
            <div
              key={key}
              className={`shadow-md rounded-md overflow-hidden transition transform ${
                selectedPackage === Number(key) ? "scale-105" : ""
              }`}
            >
              <img
                src={require(`../assets/images/${packageDetails[key].image}`)}
                alt={packageDetails[key].title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-md font-bold mb-2 text-gray-800">
                  {packageDetails[key].title}
                </h3>
                <ul className="space-y-1 text-gray-600 text-xs">
                  {packageDetails[key].description.map((item, index) => (
                    <li key={index} className="flex gap-1 items-center">
                      <FaCheckCircle className="text-purple-600 text-sm" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <div className="flex items-center justify-between py-16 px-6 bg-white">
        <img
          src={require(`../assets/images/${storyImages[0]}`)}
          alt="Our Story"
          className="w-1/3 rounded-lg shadow-md"
        />
        <div className="w-2/3 pl-6">
          <h3 className="text-xl text-purple-600 font-semibold mb-2">
            Our Story
          </h3>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your Dream Shaper
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Are you looking for a construction company that can help you build
            your dream home or business in a beautiful and natural setting? If
            so, you have come to the right place. We are Classic Builders, the
            construction company that specializes in low-cost, high-quality, and
            classic design projects. We have a team of experts who can handle
            any type of project, from residential to commercial, from small to
            large. We work with you to create a design that suits your needs,
            preferences, and budget.
          </p>
          <div className="relative mt-4">
            <img
              src={require(`../assets/images/${storyImages[currentImageIndex]}`)}
              alt="Story Slider"
              className="w-full h-[330px] object-cover rounded-lg shadow-md"
            />

            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-purple-700 transition"
              onClick={handlePrevious}
            >
              <FaArrowLeft />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-purple-700 transition"
              onClick={handleNext}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-2">
          Our Gallery
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Our Projects Blend Well With The Surroundings
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={require(`../assets/images/${img}`)}
              alt={`Gallery ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>

      {/* Blogs Section */}
      <div className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-2">
          Our Blogs
        </h2>
        <p className="text-lg text-gray-600 mb-8">Blog For Bali Travelers</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {blogImages.map((img, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={require(`../assets/images/${img}`)}
                alt={`Blog ${index + 1}`}
                className="w-full h-32 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Blog Title {index + 1}
                </h3>
                <p className="text-gray-600">
                  Explore modern designs and tips for building your dream home.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
