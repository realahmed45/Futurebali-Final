import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css'; // Import the CSS file

// Modal Component for Payment Confirmation
const Modal = ({ showModal, handleClose, paymentInfo }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">Payment Successful</div>
        <div className="modal-body">
          <div className="payment-details">
            <p><strong>Name:</strong> {paymentInfo.name}</p>
            <p><strong>Email:</strong> {paymentInfo.email}</p>
            <p><strong>Contact:</strong> {paymentInfo.contact}</p>
            <p><strong>Transaction ID:</strong> {paymentInfo.transactionId}</p>
            <p><strong>Package:</strong> {paymentInfo.package}</p>
            <p><strong>Total Paid:</strong> ${paymentInfo.amountPaid}</p>
            <p><strong>Payment Note:</strong> {paymentInfo.paymentNote}</p>
          </div>
        </div>
        <div className="modal-footer">
          <button className="close-button" onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const selectedAddOns = state?.selectedAddOns || [];
  const basePackage = state?.basePackage || { description: "No Package Selected", price: 0 };
  const totalCost = state?.totalCost || 0;

  const [showModal, setShowModal] = useState(false);  // State to manage modal visibility
  const [paymentInfo, setPaymentInfo] = useState(null);  // Store payment info

  const handlePayment = (type) => {
    let info = {
      name: 'Fenny Moris',  // You can update this dynamically as needed
      email: 'fenny@gmail.com',
      contact: '+123456789',
      transactionId: '#12346',
      package: basePackage.description.split(".")[0],
      total: totalCost,
      amountPaid: type === 'full' ? totalCost : 2000,
      paymentNote: type === 'full'
        ? 'Full payment has been processed.'
        : '2000 USD deposit has been received, the rest to be transferred to the bank account within 1 week.'
    };

    setPaymentInfo(info);  // Store payment info for the modal
    setShowModal(true);  // Show modal
  };

  const handleCloseModal = () => {
    setShowModal(false);  // Close the modal
    navigate('/confirmation');  // Redirect after payment is processed
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Payment Page</h1>

      <div className="payment-sections">
        {/* Left Section - Payment Options */}
        <div className="payment-options">
          <h2>Payment Options</h2>
          <div className="payment-methods">
            <div className="payment-option">
              <input type="checkbox" id="paypal" name="paymentMethod" />
              <label htmlFor="paypal" className="payment-label">
                <button className="payment-button">PayPal</button>
              </label>
            </div>
            <div className="payment-option">
              <input type="checkbox" id="card" name="paymentMethod" />
              <label htmlFor="card" className="payment-label">
                <button className="payment-button">Debit/Credit Card</button>
              </label>
            </div>
          </div>
        </div>

        {/* Right Section - Package Info */}
        <div className="package-info">
          <h2>Your Package</h2>
          <table className="info-table">
            <tbody>
              <tr>
                <td className="info-label">Description</td>
                <td>
                  {basePackage.description.split(".")[0]} (${basePackage.price})
                </td>
              </tr>
              {selectedAddOns.map((addOn, index) => (
                <tr key={index}>
                  <td className="info-label">Add-on</td>
                  <td>{addOn.room} (${addOn.price})</td>
                </tr>
              ))}
              <tr>
                <td className="info-label">Total Cost</td>
                <td className="highlight-text">${totalCost}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Card Details Section */}
      <div className="card-details">
        <h2>Card Details</h2>
        <form>
          <div className="form-group">
            <label>Card Holder Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" placeholder="Enter card number" />
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input type="password" placeholder="Enter CVV" />
          </div>

          <div className="payment-buttons">
            <button
              type="button"
              className="submit-button full-payment"
              onClick={() => handlePayment('full')}
            >
              Pay Full Amount: ${totalCost}
            </button>

            <span className="or-text">OR</span>

            <button
              type="button"
              className="submit-button partial-payment"
              onClick={() => handlePayment('partial')}
            >
              Pay 2000 Deposit
            </button>
          </div>
        </form>
      </div>

      <div>
        <h4 className="red-text">
          Pay 2000 deposit via PayPal and the rest you can directly transfer to the bank account within 1 week and send us a screenshot over WhatsApp.
        </h4>
      </div>

      {/* Modal for Payment Confirmation */}
      <Modal showModal={showModal} handleClose={handleCloseModal} paymentInfo={paymentInfo} />
    </div>
  );
};

export default Payment;
