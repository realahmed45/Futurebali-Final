import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const basePackage = state?.basePackage || {
    title: "Fully Furnished 2 Bedroom House With Pool",
    price: 112,
    description:
      "Includes Master Bedroom, Bathroom, Kitchen, Storage, and Garden.",
  };

  const selectedAddOns = state?.selectedAddOns || [];
  const addOnTotal = selectedAddOns.reduce(
    (sum, addOn) => sum + addOn.price,
    0
  );
  const totalCost = basePackage.price + addOnTotal;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    address: "",
    notes: "",
    saveDetails: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePlaceOrder = () => {
    if (formData.firstName && formData.lastName && formData.email) {
      navigate("/payment");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-16">
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-6 text-left text-purple-600 uppercase">
        Checkout
      </h1>

      {/* Billing Details Form */}
      <div className="w-full lg:w-2/3 bg-white p-8 shadow-md border border-gray-300 mb-8 rounded-md">
        <h2 className="text-2xl font-medium mb-6 text-gray-800 uppercase">
          Billing Details
        </h2>
        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-1">
                First Name*
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 text-lg focus:ring-2 focus:ring-purple-600 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-1">
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 text-lg focus:ring-2 focus:ring-purple-600 rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-1">
                Phone*
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 text-lg focus:ring-2 focus:ring-purple-600 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-1">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 text-lg focus:ring-2 focus:ring-purple-600 rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-800 mb-1">
              Country/Region*
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 text-lg focus:ring-2 focus:ring-purple-600 rounded-md"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-800 mb-1">
              Address*
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 text-lg focus:ring-2 focus:ring-purple-600 rounded-md"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-800 mb-1">
              Additional Notes (Optional)
            </label>
            <textarea
              name="notes"
              rows="3"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 text-lg focus:ring-2 focus:ring-purple-600 rounded-md"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="saveDetails"
              checked={formData.saveDetails}
              onChange={handleChange}
              className="w-5 h-5 mr-2"
            />
            <label className="text-gray-700 font-medium text-lg">
              Save billing details for later use
            </label>
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div className="w-full bg-white p-8 shadow-md border border-gray-300 rounded-md">
        <h2 className="text-2xl font-medium mb-4 text-purple-600 uppercase">
          Your Order
        </h2>
        <table className="w-full text-left border-collapse text-lg">
          <tbody>
            <tr>
              <td className="p-3 font-medium border text-gray-700">
                Fully Furnished Villa
              </td>
              <td className="p-3 border text-gray-700">${basePackage.price}</td>
            </tr>
            {selectedAddOns.map((addOn, index) => (
              <tr key={index}>
                <td className="p-3 border text-gray-700">
                  {addOn.room} (Add-On)
                </td>
                <td className="p-3 border text-gray-700">${addOn.price}</td>
              </tr>
            ))}
            <tr className="font-medium">
              <td className="p-3 border text-gray-700">Sub Total</td>
              <td className="p-3 border text-gray-700">${addOnTotal}</td>
            </tr>
            <tr className="font-semibold text-purple-600">
              <td className="p-3 border text-lg">Total</td>
              <td className="p-3 border text-lg">${totalCost}</td>
            </tr>
          </tbody>
        </table>

        {/* Place Order Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handlePlaceOrder}
            className="bg-purple-600 text-white py-2 px-6 font-medium text-lg hover:bg-purple-700 transition rounded-md"
          >
            Place Order
          </button>
        </div>
      </div>

      <p className="text-red-500 text-center mt-6 text-sm">
        *Your account will be created automatically after placing your first
        order.
      </p>
    </div>
  );
};

export default PlaceOrder;
