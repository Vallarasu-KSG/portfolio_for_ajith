import React from 'react';
import './Experience.css';
import { FaBuilding, FaUserTie, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>

      {/* Experience 1 */}
      <div className="experience-card" data-aos="fade-up">
        <h3 className="company-name">
          <FaBuilding /> Wondersoft Private Limited - Chennai
        </h3>
        <p className="job-title">
          <FaUserTie /> Business Manager
        </p>
        <p className="job-duration">
          <FaCalendarAlt /> June 2025 - Present
        </p>
        <ul className="job-responsibilities">
          <li>
            <FaCheckCircle /> Analyze customer and sales data to identify new market opportunities, increasing B2B client acquisition by 25%.
          </li>
          <li>
            <FaCheckCircle /> Convert partner-generated leads into paying customers, contributing to sustained revenue growth.
          </li>
          <li>
            <FaCheckCircle /> Conduct product demos and consultative discussions to tailor SaaS solutions to client business needs.
          </li>
          <li>
            <FaCheckCircle /> Build and maintain strong relationships with corporate clients and partners.
          </li>
        </ul>
      </div>

      {/* Experience 2 */}
      <div className="experience-card" data-aos="fade-up" data-aos-delay="200">
        <h3 className="company-name">
          <FaBuilding /> Stanza Living - Chennai
        </h3>
        <p className="job-title">
          <FaUserTie /> Sales Associate
        </p>
        <p className="job-duration">
          <FaCalendarAlt /> Apr 2023 - May 2025
        </p>
        <ul className="job-responsibilities">
          <li>
            <FaCheckCircle /> Managed complete B2B & B2C sales cycle from lead generation to deal closure.
          </li>
          <li>
            <FaCheckCircle /> Engaged with potential customers to explain Stanza Living’s accommodation solutions, ensuring high conversion through personalized interactions.
          </li>
          <li>
            <FaCheckCircle /> Identified new business opportunities and provided insights to improve customer experience and pricing strategies.
          </li>
          <li>
            <FaCheckCircle /> Maintained accurate records of client communications and sales data in CRM tools for performance tracking and reporting.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
