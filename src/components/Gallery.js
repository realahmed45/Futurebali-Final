import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css'; // Ensure this CSS file exists for styling

const Gallery = () => {
  const imagePaths = Array.from({ length: 12 }, (_, i) => require(`../assets/images/${i + 1}.jpeg`));

  return (
    <div className="packages-container">
      {/* Background section with single image */}
      <div className="packages-header">
        <div className="packages-header-content">
          <h1 className="packages-heading">Gallery</h1>
          <p className="packages-description">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt; Gallery
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
      <h2 
  style={{
    textAlign: 'center',
    margin: '20px 0',
    fontSize: '40px',
    fontWeight: '400',
    color: '#2c3e50',
    fontFamily: 'Georgia, serif',
    fontStyle: 'italic',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
    letterSpacing: '1.2px',
  }}
>
  Gallery
</h2>

        <div className="image-grid">
          {imagePaths.map((imagePath, index) => (
            <div key={index} className="image-container">
              <img src={imagePath} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
