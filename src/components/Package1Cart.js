import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import packageImage from "../assets/images/package1cart1.png"; // Correct image path

import bedroom from "../assets/images/package1cart1bedroom.png"; // Image for Bedroom
import bathroomImage from "../assets/images/package1cart1bathroom.png";
import kitchen from "../assets/images/package1cart1kitchen.png";
import storage from "../assets/images/package1cart1storage.png";
import garden from "../assets/images/package1cart1.garden.png";

import "./Package1Cart.css";

const Package1Cart = () => {
  const { state } = useLocation();
  const selectedAddOns = state?.selectedAddOns || [];
  const navigate = useNavigate();

  const basePackage = {
    description:
      "Furnished 1 Bedroom House. Bedroom: 18-20 m², Bathroom: 9-14 m², Kitchen: 12-14 m², Storage: 5 m², Garden: 121 m².",
    price: 25000,
  };

  const handlePlaceOrder = () => {
    navigate("/place-order", { state: { selectedAddOns, basePackage } });
  };

  // Add descriptions for each room type
  const descriptions = {
    Bedroom: "A cozy and spacious bedroom perfect for relaxation and comfort.",
    Bathroom: "A modern bathroom equipped with top-tier amenities.",
    Kitchen: "A fully furnished kitchen ideal for cooking and dining.",
    Storage: "A compact storage space for your belongings.",
    Garden: "A beautifully landscaped garden for outdoor leisure.",
  };

  const basePrice = 25000;
  const calculateTotal = () => {
    const addOnTotal = selectedAddOns.reduce(
      (total, addOn) => total + addOn.price,
      0
    );
    return basePrice + addOnTotal;
  };

  const handleReviewOrder = () => {
    navigate("/place-order", { state: { selectedAddOns, basePackage } });
  };

  return (
    <div className="packages1-container">
      <div className="packages1-header">
        <div className="packages1-header-content">
          <h1 className="packages1-heading">Packages Cart</h1>
          <p className="packages1-description">
            <Link to="/" className="breadcrumb1-link">
              Home
            </Link>{" "}
            &gt;
            <Link to="/packages" className="breadcrumb1-link">
              Packages
            </Link>{" "}
            &gt; Packages Cart
          </p>
        </div>
      </div>

      {/* Your Package Section */}
      <div className="your-package-section">
        <h2>Your Package</h2>
        <div className="package-box">
          {/* Image on the Left */}
          <img src={packageImage} alt="Package 1" className="package-imagec" />
          {/* Description on the Right */}
          <div className="package-description">
            <span className="h-text">
              <p>Furnished 1 Bedroom House</p>
            </span>
            <p>Bedroom: 18-20 m²</p>
            <p>Bathroom: 9-14 m²</p>
            <p>Kitchen: 12-14 m²</p>
            <p>Storage: 5 m²</p>
            <p>Garden: 121 m²</p>
            <p>
              <span className="yellow-textc">
                <strong>Price: $25000</strong>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Display selected add-ons or a message if no add-ons are selected */}
      <div className="selected-add-ons">
        <h2>Selected Add-Ons</h2>
        {selectedAddOns.length === 0 ? (
          <div className="no-add-ons-box">
            <p>No add-ons selected</p>
          </div>
        ) : (
          <div className="add-ons-container">
            {selectedAddOns.map((addOn, index) => (
              <div key={index} className="add-on-box">
                {/* Image on the left */}
                <img
                  src={
                    addOn.room === "Bedroom"
                      ? bedroom
                      : addOn.room === "Bathroom"
                      ? bathroomImage
                      : addOn.room === "Kitchen"
                      ? kitchen
                      : addOn.room === "Storage"
                      ? storage
                      : garden
                  }
                  alt={`${addOn.room} Icon`}
                  className="add-on-image"
                />
                {/* Details on the right */}
                <div className="add-on-description">
                  <p>
                    <strong>Room:</strong> {addOn.room}
                  </p>
                  <p>
                    <strong>Size:</strong> {addOn.size}
                  </p>
                  <p>
                    <strong>Price:</strong>{" "}
                    <span className="yellow-text">{`$${addOn.price}`}</span>
                  </p>
                  <p>
                    <strong>Description:</strong> {descriptions[addOn.room]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Total Cost */}
      <div className="total-cost">
        <h2>
          Sub Total: $
          {selectedAddOns.reduce((total, addOn) => total + addOn.price, 0)}
        </h2>
        <h2>Total Cost: ${calculateTotal()}</h2>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              backgroundColor: "rgb(233, 191, 7)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={handleReviewOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Package1Cart;
