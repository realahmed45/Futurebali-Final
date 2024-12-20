import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import packageImage from "../assets/images/package1cart1.png";

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
    <div className="font-sans bg-gray-50 text-gray-800 max-w-3xl mx-auto p-4 rounded-lg shadow-md">
      {/* Your Package */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Your Package</h2>

      <div className="bg-white rounded-lg shadow-md p-3 flex items-start hover:bg-purple-50 transition-all duration-300">
        <img
          src={packageImage}
          alt="Package"
          className="w-1/4 h-24 object-cover rounded-lg"
        />
        <div className="ml-3 flex-1">
          <h3 className="text-lg font-bold mb-2">{basePackage.title}</h3>
          <div className="grid grid-cols-2 gap-1 text-sm">
            {basePackage.details.map((item, index) => (
              <p key={index} className="text-gray-600">
                {item.label}: <span className="font-semibold">{item.size}</span>
              </p>
            ))}
          </div>
          <p className="text-lg font-extrabold text-purple-600 mt-2">
            ${basePackage.price}
          </p>
        </div>
      </div>

      {/* Add-Ons */}
      <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2">Add Ons</h2>
      {selectedAddOns.length > 0 ? (
        <div className="bg-white rounded-lg shadow-md p-3">
          <table className="table-auto w-full text-sm text-gray-800">
            <thead>
              <tr className="border-b">
                {selectedAddOns.map((addOn, index) => (
                  <th
                    key={index}
                    className="px-2 py-1 font-bold text-purple-600 text-center"
                  >
                    {addOn.room}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {selectedAddOns.map((addOn, index) => (
                  <td key={index} className="px-2 py-1 text-center">
                    {addOn.size}
                  </td>
                ))}
              </tr>
              <tr>
                {selectedAddOns.map((addOn, index) => (
                  <td key={index} className="px-2 py-1 text-center">
                    <div className="flex justify-center items-center space-x-2">
                      <span>${addOn.price}</span>
                      <button
                        onClick={() => handleRemoveAddOn(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTimesCircle size={14} />
                      </button>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 text-center">No add-ons selected.</p>
      )}

      {/* Total Section */}
      <div className="bg-white rounded-lg shadow-md p-3 mt-4">
        <div className="flex justify-between text-sm font-bold text-gray-800 mb-2">
          <span>Sub Total</span>
          <span>${calculateSubTotal()}</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-purple-600">
          <span>Total</span>
          <span>${calculateTotal()}</span>
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate("/review-order")}
            className="bg-purple-600 text-white mt-3 py-2 px-4 rounded-lg text-sm font-bold hover:bg-purple-700 hover:scale-105 transition-all duration-300"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Package1Cart;
