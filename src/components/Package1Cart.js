import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import packageImage from "../assets/images/package1cart1.png";
import bedroom from "../assets/images/package1cart1bedroom.png";
import bathroomImage from "../assets/images/package1cart1bathroom.png";

const Package1Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Base package: Always present
  const basePackage = {
    title: "Fully Furnished 2 Bedroom House With Pool",
    price: 112,
    details: [
      { label: "Master Bedroom", size: "25m²" },
      { label: "Master Bathroom", size: "14m²" },
      { label: "Kitchen", size: "14-18m²" },
      { label: "Garden", size: "26m²" },
      { label: "Storage", size: "5m²" },
      { label: "Swimming Pool", size: "6-8m²" },
    ],
  };

  // Load selected add-ons from location state
  const initialAddOns = location.state?.selectedAddOns || [];
  const [selectedAddOns, setSelectedAddOns] = useState(initialAddOns);

  const handleRemoveAddOn = (index) => {
    setSelectedAddOns((prev) => prev.filter((_, i) => i !== index));
  };

  const calculateSubTotal = () =>
    selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);

  const calculateTotal = () => {
    return basePackage.price + calculateSubTotal();
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Your Package */}
      <h2 className="text-3xl font-bold text-gray-800 my-8 text-left ml-32">
        Your Package
      </h2>

      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md relative hover:bg-purple-50 transition-all duration-300">
        <div className="flex p-6 items-center">
          <img
            src={packageImage}
            alt="Package"
            className="w-1/3 h-48 object-cover rounded-lg"
          />
          <div className="ml-6">
            <h3 className="text-2xl font-bold mb-4">{basePackage.title}</h3>
            {basePackage.details.map((item, index) => (
              <p key={index} className="text-gray-600 text-lg">
                {item.label}: <span className="font-semibold">{item.size}</span>
              </p>
            ))}
            <p className="text-3xl font-extrabold text-purple-600 mt-4">
              ${basePackage.price}
            </p>
          </div>
        </div>
      </div>

      {/* Customizations */}
      <h2 className="text-3xl font-bold text-gray-800 my-8 text-left ml-32">
        Customization
      </h2>
      {selectedAddOns.length > 0 ? (
        <div className="max-w-5xl mx-auto space-y-6">
          {selectedAddOns.map((addOn, index) => (
            <div
              key={index}
              className="flex bg-white rounded-lg shadow-md p-6 items-center hover:bg-purple-50 transition-all duration-300 relative"
            >
              <button
                onClick={() => handleRemoveAddOn(index)}
                className="absolute bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 hover:scale-110 transition-all duration-300"
              >
                <FaTimesCircle />
              </button>
              <img
                src={addOn.room === "Bedroom" ? bedroom : bathroomImage}
                alt={addOn.room}
                className="w-1/3 h-48 object-cover rounded-lg"
              />
              <div className="ml-6 flex-1">
                <h3 className="text-xl font-bold mb-2">{addOn.room}</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Size:</strong> {addOn.size}
                </p>
                <p className="text-gray-600">{addOn.description}</p>
                <p className="text-2xl font-bold text-purple-600 mt-2">
                  ${addOn.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No add-ons selected.</p>
      )}

      {/* Total Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8 hover:bg-purple-50 transition-all duration-300">
        <div className="flex justify-between text-lg font-bold text-gray-800 mb-4">
          <span>Sub Total</span>
          <span>${calculateSubTotal()}</span>
        </div>
        <div className="flex justify-between text-2xl font-bold text-purple-600">
          <span>Total</span>
          <span>${calculateTotal()}</span>
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate("/place-order")}
            className="bg-purple-600 text-white mt-6 py-3 px-8 rounded-lg text-lg font-bold hover:bg-purple-700 hover:scale-105 transition-all duration-300"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Package1Cart;
