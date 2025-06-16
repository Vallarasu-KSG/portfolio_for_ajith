import React from 'react';
import './Experience.css';
import { FaBuilding, FaUserTie, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="experience-card">
        <h3 className="company-name"><FaBuilding /> STANZA LIVING (DWELVE SPACES PVT LTD)</h3>
        <p className="job-title"><FaUserTie /> Sales & Marketing Executive</p>
        <p className="job-duration"><FaCalendarAlt /> Sep 2022 - Oct 2022</p>
        <ul className="job-responsibilities">
          <li><FaCheckCircle /> Manage complete B2B sales cycle from lead generation to deal closure.</li>
          <li><FaCheckCircle /> Build and maintain strong relationships with corporate clients and partners.</li>
          <li><FaCheckCircle /> Negotiate contracts and service agreements with business partners.</li>
          <li><FaCheckCircle /> Generate leads through digital platforms and traditional methods.</li>
        </ul>
      </div>

      <div className="experience-card">
        <h3 className="company-name"><FaBuilding /> Sundaram Business Services</h3>
        <p className="job-title"><FaUserTie /> Marketing Intern</p>
        <p className="job-duration"><FaCalendarAlt /> Sep 2022 - Oct 2022</p>
        <ul className="job-responsibilities">
          <li><FaCheckCircle /> Helped team with market research and data collection.</li>
          <li><FaCheckCircle /> Worked on Excel for basic data entry and analysis.</li>
          <li><FaCheckCircle /> Learned about business research methods and reporting.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
