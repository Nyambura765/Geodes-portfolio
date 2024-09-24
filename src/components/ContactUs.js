import React from 'react';
import '../App.css/components/Contact.css';
import Footer from './Footer'; 

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      
      <hr className="full-width-separator" />
      
      
      <Footer />
    </div>
  );
};

export default ContactUs;
