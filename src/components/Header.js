import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [userName, setUserName] = useState("");
  const [userOccupation, setUserOccupation] = useState("");
  const [showOptions, setShowOptions] = useState(false); // Track hover state for options
  const navigate = useNavigate();

  // Handle opening the Sign In modal
  const handleSignInClick = () => {
    setIsSignInOpen(true);
  };

  // Handle closing the Sign In or OTP modal
  const handleCloseModal = () => {
    setIsSignInOpen(false);
    setIsOtpModalOpen(false);
    setName("");
    setEmail("");
    setOtp("");
    setOtpError("");
  };

  // Function to send OTP to email
  const sendOtpToEmail = async () => {
    if (!name || !email) {
      alert("Please enter your name and email.");
      return;
    }

    try {
      const response = await fetch(
        "https://obnoxious-britteny-nextgedev-b04d26c6.koyeb.app/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        }
      );

      const data = await response.json();
      if (data.success) {
        setGeneratedOtp(data.otp);
        setIsOtpModalOpen(true);
        setIsSignInOpen(false);
        setUserOccupation(data.user.isNewUser ? "" : data.user.occupation);
      } else {
        alert("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Handle submitting the email and name
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    sendOtpToEmail();
  };

  // Handle verifying OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (otp === generatedOtp) {
      setOtpError("");
      setIsOtpModalOpen(false);

      try {
        const response = await fetch(
          "https://obnoxious-britteny-nextgedev-b04d26c6.koyeb.app/check-user",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),
          }
        );

        const data = await response.json();
        if (response.ok) {
          setUserName(`<span style="color: white;">👤</span> ${name}`);
          alert(data.message);
          navigate("/");
        } else {
          alert("Something went wrong. Please try again later.");
        }
      } catch (error) {
        console.error("Error verifying user:", error);
        alert("Failed to verify user. Please try again.");
      }
    } else {
      setOtpError("Invalid OTP. Please try again.");
    }
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      // Clear session or token, then navigate to the home page
      localStorage.removeItem("authToken");
      setUserName("");
      setUserOccupation("");
      setShowOptions(false); // Hide the user options

      navigate("/"); // Assuming the home page is the login page
    }
  };

  return (
    <header>
      <nav>
        <img src={require("../assets/images/logo1.png")} alt="Logo" />
        <div className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/packages" className="link">
            Packages
          </Link>
          <Link to="/contactUs" className="link">
            Contact Us
          </Link>
          <Link to="/gallery" className="link">
            Gallery
          </Link>
          <Link to="/case-study" className="link">
            Case Study
          </Link>

          {userName ? (
            <div
              className="user-name"
              onMouseEnter={() => setShowOptions(true)}
              onMouseLeave={() => setShowOptions(false)}
            >
              <span dangerouslySetInnerHTML={{ __html: userName }} />
              {userOccupation ? ` (${userOccupation})` : ":)"}

              {/* Show options when hovering */}
              {showOptions && (
                <div className="user-options">
                  <Link to="/settings" className="user-option">
                    Account Settings
                  </Link>
                  <Link to="/history" className="user-option">
                    Order History
                  </Link>
                  <span className="user-option logout" onClick={handleLogout}>
                    Logout
                  </span>
                </div>
              )}
            </div>
          ) : (
            <span className="sign-in" onClick={handleSignInClick}>
              || Sign In 👤
            </span>
          )}
        </div>
      </nav>

      {/* Modal for Sign In */}
      {isSignInOpen && (
        <div className="sign-in-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmitEmail}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Next
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal for OTP Verification */}
      {isOtpModalOpen && (
        <div className="sign-in-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Enter OTP</h2>
            <form onSubmit={handleVerifyOtp}>
              <div className="form-group">
                <label>OTP</label>
                <input
                  type="text"
                  placeholder="Enter the OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              {otpError && <p className="error">{otpError}</p>}
              <button type="submit" className="submit-btn">
                Verify OTP
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
