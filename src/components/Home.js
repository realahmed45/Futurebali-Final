import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css';

const Home = () => {

  const images = ['a.png', 'b.png', 'c.png','1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg'];
  
  const images2 = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '8.jpeg'];
  // Array of images for the slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)); // Loop back to the last image
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)); // Loop to the first image
  }

  const [selectedPackage, setSelectedPackage] = useState(1);

  const packageDetails = {
    1: {
      title: 'Fully Furnished Single Bedroom House',
      description: [
        'Modern and ergonomic design',
        'Land 80m², built up 35m²',
        '3 months complete',
        'Possibility 49m²',
        'Possibility 180m² total land',
        'Ready to move',
      ],
    },
    2: {
      title: 'Fully Furnished Bedroom House With Pool',
      description: [
        'Luxury house with pool',
        'Spacious design',
        'Modern amenities',
        'Built up 50m²',
        'Land 100m²',
        'Exclusive neighborhood',
      ],
    },
    3: {
      title: 'Fully Furnished Two Bedroom House With Pool',
      description: [
        'Perfect for families',
        'Two bedrooms',
        'Lounge area',
        'Land 150m²',
        'Built up 80m²',
        'Great for relaxation',
      ],
    },
  };

  const handleImageClick = (id) => setSelectedPackage(id);

  // const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']; // Gallery images

  return (
    <div className="home-container">
      <div className="hero-section">
  <div className="welcome-message">
    <div className="hero-buttons">
      <button className="hero-button" onClick={() => window.location.href = 'packages'}>
       View Packages
      </button>
      <button className="hero-button" onClick={() => window.location.href = 'contactUs'}>
       Contact Us
      </button>
    </div>
  </div>
</div>

      <div className="packages-section">
        <div className="packages-intro">
          <h2 className="packages-heading">OUR PACKAGES</h2>
          <h3 className="packages-subheading">Choose The Best For You</h3>
          <p className="packages-description">
            We offer simple, customizable & affordable building packages. <br />
            So let's make your dream come true.
          </p>
        </div>

        <div className="packages-buttons">
          {Object.keys(packageDetails).map((key) => (
            <button
              key={key}
              onClick={() => handleImageClick(Number(key))}
              className={`package-button ${selectedPackage === Number(key) ? 'active' : ''}`}
            >
              {packageDetails[key].title}
            </button>
          ))}
        </div>

        <div className="packages-images">
          <img
            src={require('../assets/images/1.jpeg')}
            alt="Package 1"
            onClick={() => handleImageClick(1)}
            className={`package-image ${selectedPackage === 1 ? 'selected' : ''}`}
          />
          <img
            src={require('../assets/images/2.jpeg')}
            alt="Package 2"
            onClick={() => handleImageClick(2)}
            className={`package-image ${selectedPackage === 2 ? 'selected' : ''}`}
          />
          <img
            src={require('../assets/images/3.jpeg')}
            alt="Package 3"
            onClick={() => handleImageClick(3)}
            className={`package-image ${selectedPackage === 3 ? 'selected' : ''}`}
          />
        </div>

        <div className="package-details">
          <h3>{packageDetails[selectedPackage].title}</h3>
          <div className="description-container">
            {packageDetails[selectedPackage].description.map((item, index) => (
              <div key={index} className="description-item">
                <p>• {item}</p>
              </div>
            ))}
          </div>
          <Link
            to={`/package${selectedPackage}`}
            className="learn-more-button"
          >
            Learn More
          </Link>
        </div>
      </div>


      <div className="our-story-section">
        {/* Left Image (This won't change with slider) */}
        <div className="story-left-image">
          <img
            src={require('../assets/images/q.png')}
            alt="Our Story Left"
            className="left-image"
          />
        </div>

        {/* Right Content with Text Above Slider */}
        <div className="story-right-content">
          <div className="story-text">
            <h3>Our Story</h3>
            <h2>Your Dream Shaper</h2>
            <p style={{ fontSize: '14px' }}>
              Are you looking for a construction company that can help you build your dream home or business in a beautiful and natural setting? If so, you have come to the right place. We are Classic Builders, the construction company that specializes in low-cost, high-quality, and classic design projects. We have a team of experts who can handle any type of project, from residential to commercial, from small to large. We work with you to create a design that suits your needs, preferences, and budget.
            </p>
          </div>

          {/* Slider with Navigation */}
          <div className="slider-container">
            <img
              src={require(`../assets/images/${images[currentImageIndex]}`)}
              alt="Story Image"
              className="story-image"
            />
            <div className="slider-buttons">
              {/* Left Arrow Button */}
              <button onClick={handlePrevious} className="slider-nav left">
                &#10094; {/* Left arrow symbol */}
              </button>

              {/* Right Arrow Button */}
              <button onClick={handleNext} className="slider-nav right">
                &#10095; {/* Right arrow symbol */}
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Gallery section */}
          
      <div className="gallery-section2">
      <h5 className="gallery-heading2">Our Gallery</h5>
  <h2 className="gallery-title2">
    Our Projects Blend Well With The Surroundings
  </h2>

  <div className="gallery-grid2">
    {images2.slice(0, 7).map((image, index) => (
      <div
        key={index}
        className={`gallery-item2 gallery-item-${index + 1}`}
      >
        <img
          src={require(`../assets/images/${image}`)}
          alt={`Gallery ${index + 1}`}
          className="gallery-image2"
        />
        <div className="gallery-item-text2">
          <h3>
            {[
              "Apartment",
              "B & B",
              "Cabin",
              "Condos",
              "Dorm",
              "Villa",
              "Mansion",
            ][index]}
          </h3>
          <p>
            {[
              "great places to rent",
              "great locations",
              "gorgeous views",
              "last minute offers",
              "beautiful places",
              "luxury homes",
              "spacious elegance",
            ][index]}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
      {/* Gallery Section end */}


      {/* Blog Section start */}


      <div className="blogs-section">
  <h3 className="blogs-heading">Our Blogs</h3>
  <h2 className="blogs-description">
  Blog For Bali Travelers
  </h2>
  <div className="blogs-grid">
    {['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg'].map((image, index) => (
      <div key={index} className="blog-item">
        <img
          src={require(`../assets/images/${image}`)}
          alt={`Blog ${index + 1}`}
          className="blog-image"
        />
        <div className="blog-title">Blog Title {index + 1}</div>
      </div>
    ))}
  </div>
</div>


      {/* Blog Section end */}

    </div>

    
  );
};

export default Home;
