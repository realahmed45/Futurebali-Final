import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { state } = useLocation();
  const navigate = useNavigate();  // Hook to navigate to the Payment page

  // Extract data passed via state
  const selectedAddOns = state?.selectedAddOns || [];
  const basePackage = state?.basePackage || { description: "No Package Selected", price: 0 };

  // Calculate totals
  const addOnTotal = selectedAddOns.reduce((total, addOn) => total + addOn.price, 0);
  const totalCost = basePackage.price + addOnTotal;

  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    username: '',
    country: '',
    address: '',
    additionalNotes: '',
    saveForLater: false
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Validate the form to check if all required fields are filled
  const isFormValid = () => {
    return formData.firstName && formData.lastName && formData.phone && formData.email && formData.username && formData.country && formData.address;
  };

  // Handle the Confirm Order button click
  const handleConfirmOrder = () => {
    if (isFormValid()) {
      // If form is valid, navigate to the Payment page
      navigate('/payment', { state: { selectedAddOns, basePackage, totalCost, formData } });
    } else {
      // Show alert if the form is invalid
      alert("Please fill in all required fields!");
    }
  };

  return (
    <div style={{
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
    }}>
      {/* Form Section */}
      <div style={{
        marginBottom: "30px",width:"80%",marginLeft:"105px", marginTop:"40px",padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}>
        <h2>Personal Details</h2>
        <form>
          <div style={{ marginBottom: "10px" }}>
            <label>First Name</label><br />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={{ width: "90%", padding: "10px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ddd" }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Last Name</label><br />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={{ width: "90%", padding: "10px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ddd" }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Phone</label><br />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{ width: "90%", padding: "10px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ddd" }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Email</label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "90%", padding: "10px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ddd" }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Username</label><br />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={{ width: "90%", padding: "10px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ddd" }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Country/Region</label><br />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={{ width: "90%", padding: "10px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ddd" }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Address</label><br />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={{ width: "90%", padding: "10px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ddd" }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Additional Notes</label><br />
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              style={{ width: "90%", padding: "10px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ddd" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label>
              <input
                type="checkbox"
                name="saveForLater"
                checked={formData.saveForLater}
                onChange={handleChange}
                style={{ marginRight: "10px" }}
              />
              Save for later use
            </label>
          </div>
        </form>
      </div>

      {/* Order Details Section */}
      <div style={{
        padding: "20px",
        border: "2px solid #ddd",   // Border around the entire content
        borderRadius: "10px",        // Rounded corners
        width: "80%",                // Optional: Adjust width for better positioning
        margin: "0 auto",            // Center the content horizontally
        backgroundColor: "#fff"      // Background color for the box
      }}>
        <h1 style={{ textAlign: "center" }}>Place Your Order</h1>

        {/* Package Details */}
        <h2>Your Package</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "10px", fontWeight: "bold" }}>Description</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{basePackage.description}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "10px", fontWeight: "bold" }}>Price</td>
              <td style={{ border: "1px solid #ddd", padding: "10px", fontWeight: "bold", color: "rgb(233, 191, 7)" }}>
                ${basePackage.price}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Add-Ons Details */}
        <h2>Selected Add-Ons</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Room</th>
              <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Size</th>
              <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {selectedAddOns.map((addOn, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>{addOn.room}</td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>{addOn.size} m²</td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>${addOn.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Price */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2>Add-Ons Total: ${addOnTotal}</h2>
          <h2>Total Cost: ${totalCost}</h2>
        </div>
      </div>

      {/* Confirm Order Button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            backgroundColor: "rgb(233, 191, 7)",
            color: "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
          onClick={handleConfirmOrder}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
