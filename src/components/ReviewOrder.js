import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ReviewOrder = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Extract data passed via state
  const selectedAddOns = state?.selectedAddOns || [];
  const basePackage = state?.basePackage || { description: "No Package Selected", price: 0 };

  // Calculate totals
  const addOnTotal = selectedAddOns.reduce((total, addOn) => total + addOn.price, 0);
  const totalCost = basePackage.price + addOnTotal;

  // State to manage the agreement checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Navigate to the next page (Place Order) when checkbox is checked
  const handleProceedToOrder = () => {
    if (isChecked) {
      navigate('/place-order', { state: { selectedAddOns, basePackage, totalCost } });
    } else {
      alert('Please agree to the terms and conditions to proceed.');
    }
  };

  return (
    <div style={{ padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
      <h2>Review Your Order</h2>

      {/* User Details */}
      <div style={{ marginBottom: "20px" }}>
        <h3>User Details</h3>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Profession:</strong> Software Developer</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
      </div>

      {/* Package Details */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Your Package</h3>
        <p>{basePackage.description}</p>
        <p><strong>Price: ${basePackage.price}</strong></p>
      </div>

      {/* Selected Add-ons */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Selected Add-Ons</h3>
        {selectedAddOns.length === 0 ? (
          <p>No add-ons selected</p>
        ) : (
          <ul>
            {selectedAddOns.map((addOn, index) => (
              <li key={index}>
                <strong>{addOn.room}</strong>: {addOn.size} - ${addOn.price}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Total Cost */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Total Cost: ${totalCost}</h3>
      </div>

      {/* Terms and Conditions Agreement */}
      <div style={{ marginBottom: "20px", padding: "15px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h3>Agreement</h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#333" }}>
          <strong>Pada hari ini tanggal....2024 kami yang bertanda tangan di bawah ini:</strong><br />
          <strong>On this day.....2024, the undersigned us:</strong><br />
          <strong>Nama:</strong> John Doe<br />
          <strong>Place and Date of Birth:</strong> Jakarta, January 1, 1990<br />
          <strong>Pekerjaan:</strong> Software Developer<br />
          <strong>Occupation:</strong> Software Developer<br />
          <strong>Alamat:</strong> Jl. Merdeka No. 123, Jakarta<br />
          <strong>Address:</strong> Jl. Merdeka No. 123, Jakarta<br />
          <strong>Nomor KTP/Paspor:</strong> 1234567890<br />
          <strong>Id/Passport Nr:</strong> 1234567890<br />
          <br />
          <strong>Dalam hal ini bertindak atas nama diri pribadi yang selanjutnya disebut sebagai PIHAK PERTAMA.</strong><br />
          <strong>In this case acting on behalf of oneself hereinafter referred to as the FIRST PARTY.</strong><br />
          <br />
          <strong>Nama:</strong> Jane Doe<br />
          <strong>Tempat, Tanggal Lahir:</strong> Jakarta, January 2, 1992<br />
          <strong>Place and Date of Birth:</strong> Jakarta, January 2, 1992<br />
          <strong>Pekerjaan:</strong> Entrepreneur<br />
          <strong>Occupation:</strong> Entrepreneur<br />
          <strong>Alamat:</strong> Jl. Kemerdekaan No. 45, Jakarta<br />
          <strong>Address:</strong> Jl. Kemerdekaan No. 45, Jakarta<br />
          <strong>Nomor KTP/Paspor:</strong> 9876543210<br />
          <strong>Id/Passport Nr:</strong> 9876543210<br />
          <br />
          <strong>Selanjutnya, untuk maksud tersebut di atas, PARA PIHAK sepakat untuk mengikatkan diri dalam Kerjasama Usaha yaitu PARA PIHAK sepakat untuk bekerjasama membuat usaha villa kompleks dengan ketentuan dan syarat-syarat sebagaimana diatur dalam pasal-pasal di bawah ini:</strong><br />
          <strong>Furthermore, for the purposes stated above, the PARTIES agree to bind themselves in a Business Cooperation, namely the PARTIES agree to work together to create a complex villa business with the terms and conditions as regulated in the articles below.</strong>
        </p>
      </div>

      {/* Terms and Conditions Checkbox */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span style={{ marginLeft: "10px", fontSize: "16px" }}>I agree to the terms and conditions</span>
        </label>
      </div>

      {/* Proceed Button */}
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={handleProceedToOrder}
          disabled={!isChecked} // Disable button if checkbox is not checked
        >
          Proceed to Order
        </button>
      </div>
    </div>
  );
};

export default ReviewOrder;
