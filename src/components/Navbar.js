import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css/components/Navbar.css'; 

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      lastScrollY.current = currentScrollY; 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="logo">
        <h2>GEODES</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
