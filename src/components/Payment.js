import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Modal Component for Payment Confirmation
const Modal = ({ showModal, handleClose, paymentInfo }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container bg-white shadow-lg rounded-md p-6">
        <h2 className="text-xl font-bold mb-4 text-purple-600">
          Payment Successful
        </h2>
        <div className="space-y-2">
          <p>
            <strong>Name:</strong> {paymentInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {paymentInfo.email}
          </p>
          <p>
            <strong>Contact:</strong> {paymentInfo.contact}
          </p>
          <p>
            <strong>Transaction ID:</strong> {paymentInfo.transactionId}
          </p>
          <p>
            <strong>Total Paid:</strong> ${paymentInfo.amountPaid}
          </p>
        </div>
        <button
          onClick={handleClose}
          className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const basePackage = state?.basePackage || {
    title: "Fully Furnished Single Bedroom Villa",
    price: 250000,
  };
  const selectedAddOns = state?.selectedAddOns || [
    { room: "Garden", price: 60000 },
  ];
  const totalCost =
    basePackage.price +
    selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);

  const [showModal, setShowModal] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(null);

  const handlePayment = (type) => {
    const info = {
      name: "Fenny Moris",
      email: "fenny@gmail.com",
      contact: "+123456789",
      transactionId: "#12346",
      amountPaid: type === "full" ? totalCost : 2000,
    };

    setPaymentInfo(info);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/confirmation");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-6 md:px-16">
      {/* Payment Method */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase">
        Payment Method
      </h2>

      {/* Payment & Order Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Select Payment Method */}
        <div className="bg-white p-6 shadow-md border border-gray-300 rounded-md">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Select Payment Method
          </h3>
          <div className="border border-gray-300 rounded-md p-4">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="payment"
                className="w-5 h-5"
                defaultChecked
              />
              <span className="text-gray-700 font-medium text-lg">PayPal</span>
            </label>
          </div>
        </div>

        {/* Your Order */}
        <div className="bg-white p-6 shadow-md border border-gray-300 rounded-md">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Your Order
          </h3>
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <td className="p-2">Fully Furnished Single Bedroom Villa</td>
                <td className="p-2 text-right font-bold">250000 USD</td>
              </tr>
              {selectedAddOns.map((addOn, index) => (
                <tr key={index}>
                  <td className="p-2">{addOn.room} (Add-On)</td>
                  <td className="p-2 text-right font-bold">
                    {addOn.price} USD
                  </td>
                </tr>
              ))}
              <tr className="border-t">
                <td className="p-2 font-bold text-gray-800">Total</td>
                <td className="p-2 text-right font-bold text-purple-600">
                  {totalCost} USD
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Card Details */}
      <div className="mt-8 bg-white p-6 shadow-md border border-gray-300 rounded-md w-[65%] md:w-[49%]">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Card Details
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Card Number
            </label>
            <input
              type="text"
              placeholder="Enter card number"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Card Holder
            </label>
            <input
              type="text"
              placeholder="Enter card holder name"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Expiry
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              CVV
            </label>
            <input
              type="password"
              placeholder="Enter CVV"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </form>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col items-center">
        <button
          onClick={() => handlePayment("full")}
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-8 rounded-md font-bold text-lg mb-4 transition"
        >
          Pay Total {totalCost} Now
        </button>
        <span className="text-gray-500 font-semibold mb-2">OR</span>
        <button
          onClick={() => handlePayment("partial")}
          className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-2 px-8 rounded-md font-bold text-lg transition"
        >
          Pay 2000 Deposit
        </button>
      </div>

      <p className="text-red-500 text-sm mt-6 text-center">
        *Pay 2000 deposit via PayPal and the rest you can directly transfer to
        the bank account within 1 week and send us a screenshot over WhatsApp.
      </p>

      <Modal
        showModal={showModal}
        handleClose={handleCloseModal}
        paymentInfo={paymentInfo}
      />
    </div>
  );
};

export default Payment;
