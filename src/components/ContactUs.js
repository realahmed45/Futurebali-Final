import React, { useState } from 'react';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import mailIcon from '../assets/images/email.png';
import phoneIcon from '../assets/images/phone.png';



const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        email: '',
        phone: '',
        message: '',
        budget: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form data
        const { name, email, message } = formData;
        
        if (!name || !email || !message) {
            alert('Please fill in all required fields');
            return;
        }

        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        
        // Optional: Reset form after submission
        setFormData({
            name: '',
            country: '',
            email: '',
            phone: '',
            message: '',
            budget: ''
        });
    };

    return (
        <div className="ContactUs-container">
            <div className="ContactUs-header">
                <div className="ContactUs-header-content">
                    <h1 className="ContactUs-heading">Contact Us</h1>
                    <p className="ContactUs-description">
                        <Link to="/" className="breadcrumb-link">
                            Home
                        </Link>{' '}
                        &gt; Contact Us
                    </p>
                </div>
            </div>

            <div className="ContactUs-contact">
                <div className="ContactUs-contact-content">
                    <div className="ContactUs-contact-description">
                        <h2 className="ContactUs-contact-heading1">Contact Us</h2>
                        <h2 className="ContactUs-contact-heading">Feel free to get in touch with us</h2>
                        <p className="ContactUs-contact-text">
                        We are here to help you with any inquiries you may have throughout the process, from the initial planning to the final construction. Please fill out the form to contact our friendly team and discuss your needs for your villa, land, commercial property, or construction project.
                        
                        <div className="ContactUs-contact-methods">
    <div className="ContactUs-phone">
        <p className="ContactUs-phone-text">Have any questions?</p> {/* Added text above phone number */}
        <img src={phoneIcon} alt="Phone" className="ContactUs-icon" />
        <span>+62 877-6948-9487</span>
    </div>
    <div className="ContactUs-email">
        <p className="ContactUs-email-text">Write email</p> {/* Added text above email */}
        <img src={mailIcon} alt="Email" className="ContactUs-icon" />
        <a href="mailto:needhelp@company.com">needhelp@company.com</a>
    </div>
</div>
                    </p>

                    </div>
                    <div className="ContactUs-contact-form">
                        <h2 className="ContactUs-contact-heading">Write anytime</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Your Name" 
                                    value={formData.name} 
                                    onChange={handleChange}
                                    required 
                                />
                                <input 
                                    type="text" 
                                    name="country" 
                                    placeholder="Your Country" 
                                    value={formData.country} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="form-row">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email address" 
                                    value={formData.email} 
                                    onChange={handleChange}
                                    required 
                                />
                                <input 
                                    type="text" 
                                    name="budget" 
                                    placeholder="Your Budget (Optional)" 
                                    value={formData.budget} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="form-row">
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    placeholder="Phone Number" 
                                    value={formData.phone} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="form-row">
                                <textarea 
                                    name="message" 
                                    placeholder="Write a message"
                                    value={formData.message} 
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit">SEND A MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ContactUs;