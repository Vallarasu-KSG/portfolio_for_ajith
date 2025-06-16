import React from 'react';
import './Footer.css';

import linkedin from '../../Assets/Footer Logo/linked-in logo.png';
import instagram from '../../Assets/Footer Logo/instagram logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Content */}
        <div className="footer-left">
          <h4>Ajith S</h4>
          <p>Sales & Marketing Executive</p>
        </div>

        {/* Center Copyright */}
        <div className="footer-center">
          © 2025 <a href="https://portfolio-for-vallarasu.netlify.app/">Vallarasu</a> | All Rights Reserved
        </div>

        {/* Right Social Icons */}
        <div className="footer-right">
          <a href="https://www.linkedin.com/in/ajith-s-bb0661248/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn Logo" />
          </a>
          <a href="https://www.instagram.com/sachin_ajith_10_7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram Logo" />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
