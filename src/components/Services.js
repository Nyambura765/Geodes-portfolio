import React from 'react';
import '../App.css/components/Services.css'; 

const Services = () => {
  return (
    <div className="services-container">
      <div className="service-item">
        <h2>GIS AND REMOTE SENSING</h2>
        <img src="./services_1.img.jpg" alt="Service 1" />
        <ul className="service-list">
          <li>Data collection</li>
          <li>Geostatistical analysis</li>
          <li>Database presentation and cartography</li>
          <li>Database Design</li>
        </ul>
      </div>
      <div className="service-item">
        <h2>ENGINEERING DESIGN AND CONSTRUCTION</h2>
        <img src="./services_2.img.jpg" alt="Service 2" />
        <ul className="service-list">
          <li>Construction supervision</li>
          <li>Buildings</li>
          <li>Tanks</li>
          <li>Boreholes and shallow wells</li>
        </ul>
      </div>
      <div className="service-item">
        <h2>SURVEYING</h2>
        <img src="./services_3.img.jpg" alt="Service 3" />
        <ul className="service-list">
          <li>Topographical surveying</li>
          <li>Hydrographic surveying</li>
          <li>Engineering surveying</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
