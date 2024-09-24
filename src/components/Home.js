import React from 'react';
import '../App.css/components/Home.css'; 
// eslint-disable-next-line no-unused-vars
import Navbar from './Navbar'; 


function Home() {
  return (
    <div className="home-container">
        <Navbar /> 
      <div className="text-overlay">
        <h1>GEODES</h1>
        <h4>THE WORLD IS OURS TO MAP</h4>
      </div>
    </div>
  );
}

export default Home;
