import React from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';

const Packages = () => {
  return (
    <div className="packages-container">
      {/* Background section with single image */}
      <div className="packages-header">
        <div className="packages-header-content">
          <h1 className="packages-heading">Packages</h1>
          <p className="packages-description">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt; Packages
          </p>
        </div>
      </div>

      {/* New section for images Below the Background */}
      <section className="image-gallery">
        <div className="image-row">
          <Link to="/packages/package1" className="image-link">
            <img src={require('../assets/images/package1.png')} alt="Package 1" className="package-image" />
          </Link>
          <Link to="/packages/package2" className="image-link">
            <img src={require('../assets/images/package2.png')} alt="Package 2" className="package-image" />
          </Link>
          <Link to="/packages/package3" className="image-link">
            <img src={require('../assets/images/package3.png')} alt="Package 3" className="package-image" />
          </Link>
        </div>
        <div className="image-row">
          <Link to="/packages/package4" className="image-link">
            {/* <img src={require('../assets/images/package4.png')} alt="Package 4" className="package-image" /> */}
          </Link>
          <Link to="/packages/package5" className="image-link">
            {/* <img src={require('../assets/images/package5.png')} alt="Package 5" className="package-image" /> */}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Packages;
