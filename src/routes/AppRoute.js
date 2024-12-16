import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Packages from '../components/Packages'; 
import Package1 from '../components/Package1';
import Package2 from '../components/Package2';
import Package3 from '../components/Package3';
import ContactUs from '../components/ContactUs';
import Package1Cart from '../components/Package1Cart';
import Package2Cart from '../components/Package2Cart';

import ReviewOrder from '../components/ReviewOrder';

import PlaceOrder from "../components/PlaceOrder";
import Payment from '../components/Payment';
import CaseStudy from '../components/CaseStudy';

import Settings from '../components/Settings'; // Import Settings component
import History from '../components/History';



import '../assets/styles/App.css';

const AppRoutes = () => {
  return (
    <div className="app-layout">
      <Router>
        {/* Header always visible */}
        <Header />
        
        {/* Main content */}
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} /> {/* Use the Packages component */}
            <Route path="/ContactUs" element={<ContactUs />} />
            {/* <Route path="/contact-us" element={<div>Contact Us Page</div>} /> */}
            {/* <Route path="/case-study" element={<div>Case Study Page</div>} /> */}
            <Route path="/packages/Package1" element={<Package1 />} /> 
            <Route path="/packages/Package2" element={<Package2 />} /> 
            <Route path="/packages/Package3" element={<Package3/>} />


           <Route path="/" element={<Home />} />
           <Route path="/package1" element={<Package1 />} />      {/* Route of new web design home package to packge specifc */}
           <Route path="/package2" element={<Package2 />} />
           <Route path="/package3" element={<Package3 />} />   

        

            <Route path="/package1-cart" element={<Package1Cart />} />
            <Route path="/package2-cart" element={<Package2Cart />} />
            
            <Route path="/review-order" element={<ReviewOrder />} />  {/* Add this route */}

            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/gallery" element={<Gallery />} /> 

            <Route path="/case-study" element={<CaseStudy />} />

            <Route path="/settings" element={<Settings />} /> {/* Settings route */}
            <Route path="/history" element={<History />} /> {/* History route */}

          </Routes>
        </div>
        
        {/* Footer always visible */}
        <Footer />
      </Router>
    </div>
  );
};

export default AppRoutes;
