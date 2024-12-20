import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import emailjs from "emailjs-com";

const Header = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const handleSignInClick = () => setIsSignInOpen(true);

  const handleCloseModal = () => {
    setIsSignInOpen(false);
    setIsOtpModalOpen(false);
    setEmail("");
    setOtp("");
    setOtpError("");
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("authToken");
      setIsLoggedIn(false);
      setShowOptions(false);
      navigate("/");
    }
  };

  const sendOtpToEmail = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);

    try {
      const response = await emailjs.send(
        "service_r39zkrm",
        "template_gvxyd5q",
        { otp, to_email: email },
        "zVTuReodh-Rdvi0n_"
      );

      if (response.status === 200) {
        alert("OTP sent successfully!");
        setIsOtpModalOpen(true);
        setIsSignInOpen(false);
      } else {
        alert("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (otp === generatedOtp) {
      setOtpError("");
      setIsOtpModalOpen(false);
      setIsLoggedIn(true); // Set logged-in status
      alert("OTP Verified Successfully!");
      navigate("/");
    } else {
      setOtpError("Invalid OTP. Please try again.");
    }
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Sidebar Icon */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            className="text-2xl bg-gray-800 text-white hover:bg-purple-500 rounded-lg p-2 transition duration-300"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaBars />
          </button>
          <img
            src={require("../assets/images/logo1.png")}
            alt="Logo"
            className="h-10"
          />
        </div>

        {/* Logo */}
        <img
          src={require("../assets/images/logo1.png")}
          alt="Logo"
          className="hidden md:block h-10"
        />

        {/* Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link to="/packages" className="hover:text-purple-400 transition">
            Packages
          </Link>
          <Link to="/contactUs" className="hover:text-purple-400 transition">
            Contact Us
          </Link>
          <Link to="/gallery" className="hover:text-purple-400 transition">
            Gallery
          </Link>
        </div>

        {/* User Options */}
        {isLoggedIn ? (
          <div className="relative">
            <button
              className="flex items-center space-x-2 bg-purple-600 px-4 py-2 text-white font-bold rounded-md hover:bg-purple-500 focus:outline-none"
              onClick={() => setShowOptions(!showOptions)}
            >
              <span>👤</span>
              <FaCaretDown />
            </button>
            {showOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-purple-600 hover:bg-purple-100 rounded-t-md"
                  onClick={() => setShowOptions(false)}
                >
                  Account Settings
                </Link>
                <Link
                  to="/history"
                  className="block px-4 py-2 text-purple-600 hover:bg-purple-100"
                  onClick={() => setShowOptions(false)}
                >
                  Order History
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-purple-100 rounded-b-md"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="text-white bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-500 transition duration-300"
            onClick={handleSignInClick}
          >
            Sign In 👤
          </button>
        )}
      </nav>

      {/* Sign-In Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96 shadow-lg relative">
            <span
              className="absolute top-4 right-4 text-gray-600 text-2xl cursor-pointer"
              onClick={handleCloseModal}
            >
              &times;
            </span>
            <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
              Sign In
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendOtpToEmail();
              }}
            >
              <div className="mb-4">
                <label className="block font-bold text-black mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border text-black rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-md"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      )}

      {/* OTP Modal */}
      {isOtpModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Enter OTP</h2>
            <form onSubmit={handleVerifyOtp}>
              <div className="mb-4">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full px-4 py-3 border text-black rounded-md"
                  required
                />
              </div>
              {otpError && <p className="text-red-500">{otpError}</p>}
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-md"
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
