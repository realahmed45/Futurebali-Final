import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("account");

  // State for form fields
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");

  const handleAccountSave = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://obnoxious-britteny-nextgedev-b04d26c6.koyeb.app/update-account-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            firstname, // Corrected the name from firstname to firstName
            lastname,
            phone,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Account details updated successfully!");
        console.log(data.user); // Optional: Use updated user data
      } else {
        alert(data.message || "Failed to update account details");
      }
    } catch (error) {
      console.error("Error updating account details:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleCardSave = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://obnoxious-britteny-nextgedev-b04d26c6.koyeb.app/card-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstname, // Ensure keys match the backend
            lastName: lastname,
            email,
            phone,
            country,
            address,
            additionalDetails,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Success message from the server
      } else {
        alert(data.message || "Failed to update card details");
      }
    } catch (error) {
      console.error("Error updating card details:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="settings-container">
      <div className="account">
        <h2>Account Settings</h2>
      </div>

      <div className="button-container">
        <button
          className={activeTab === "account" ? "active" : ""}
          onClick={() => setActiveTab("account")}
        >
          Account Settings
        </button>
        <button
          className={activeTab === "card" ? "active" : ""}
          onClick={() => setActiveTab("card")}
        >
          Card Details
        </button>
      </div>

      {/* Account Settings Form */}
      {activeTab === "account" && (
        <div className="form-container">
          <h3>Update Account Details</h3>
          <form onSubmit={handleAccountSave}>
            <div className="form-group inline">
              <div className="half-width">
                <label>First Name</label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                  required
                />
              </div>
              <div className="half-width">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      )}

      {/* Card Details Form */}
      {activeTab === "card" && (
        <div className="form-container">
          <h3>Update Card Details</h3>
          <form onSubmit={handleCardSave}>
            <div className="form-group inline">
              <div className="half-width">
                <label>First Name</label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                  required
                />
              </div>
              <div className="half-width">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group inline">
              <div className="half-width">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="half-width">
                <label>Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group inline">
              <div className="half-width">
                <label>Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>
              <div className="half-width">
                <label>Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Additional Details</label>
              <textarea
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                required
              />
            </div>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Settings;
