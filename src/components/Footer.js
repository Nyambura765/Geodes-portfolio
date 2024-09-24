import React from 'react';
import '../App.css/components/Footer.css';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src="./logo.img.jpg" alt="Logo" className="footer-logo" />
      </div>
      
      <div className="social">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
      <ul className="list">
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
      <p className='contact-us'>geodes221@gmail.com</p>
      <p className="copyright">© geodes | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
