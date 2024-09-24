import React, { useRef } from 'react';
import '../App.css/components/About.css';

const AboutUs = () => {
  const scrollRef = useRef(null);

  const scrollToSection = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -scrollRef.current.offsetWidth : scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="about-us-container">
      <div className="about-content" ref={scrollRef}>
        <div className="about-section">
          <div className="about-flex">
            <div className="section-image">
              <img src="/About1.img.jpg" alt="About Us Image" />
            </div>
            <div className="section-content">
              <h2>Step into the suspenseful world of GEODES</h2>
              <p>
                We are a leading survey firm dedicated to providing comprehensive<br />
                data collection and analysis services.<br /><br />
                Our mission is to empower businesses, organizations, and governments<br />
                with accurate, actionable insights derived from meticulously gathered data.<br /><br />
                Our team of experienced professionals utilizes cutting-edge technology<br />
                and proven methodologies to deliver results that drive informed decision-making<br />
                and strategic planning.
              </p>
            </div>
          </div>
        </div>

        
        <div className="about-section">
          <div className="bio-approach-section">
            <div className="bio-approach-container">
              
              <div className="shared-image-section">
                <img src="/About.img.jpg" alt="GIS Remote Sensing" className="shared-about-image" />
              </div>

              
              <div className="section-content">
                <h2 className="bio-heading">Bio</h2>
                <p>
                  GEODES Solutions is a premier firm specializing in GIS,
                  remote sensing,<br /> photogrammetry, and surveying services.
                  With cutting-edge technology and expert professionals,
                  we deliver precise spatial data and insightful analysis<br />
                  for various industries. Our comprehensive solutions support urban planning,
                  environmental monitoring, infrastructure development,
                  and more,<br /> ensuring accuracy and efficiency in every project.
                </p>

                
                <hr className="separator" />

                <h2 className="bio-heading">Our Approach</h2>
                <p>
                  At GEODES, our approach combines advanced technology
                  with expert analysis.<br />
                  We employ state-of-the-art GIS tools, high-resolution
                  remote sensing, and <br /> precise photogrammetry to capture
                  and interpret spatial data accurately.<br />
                  We ensure quality through rigorous data validation
                  and innovative methodologies, delivering reliable and
                  actionable insights.
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="swipe-controls centered-swipe-controls">
          <button className="swipe-button" onClick={() => scrollToSection('left')}>&lt;</button>
          <button className="swipe-button" onClick={() => scrollToSection('right')}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
