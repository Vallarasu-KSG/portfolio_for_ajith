import React, { useEffect } from 'react';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaHandshake, FaSearch, FaUsers, FaBullhorn, FaLinkedin, FaFilter, FaMapMarkedAlt, FaUserPlus } from 'react-icons/fa';

const skillsData = [
  { icon: <FaHandshake />, title: 'B2B Sales & Business Development' },
  { icon: <FaSearch />, title: 'Market Research & Competitor Analysis' },
  { icon: <FaUsers />, title: 'Customer Relationship Management (CRM)' },
  { icon: <FaBullhorn />, title: 'Digital Marketing Tools & Concepts' },
  { icon: <FaLinkedin />, title: 'LinkedIn Sales Navigator' },
  { icon: <FaUserPlus />, title: 'Lead Generation & Prospecting' },
  { icon: <FaFilter />, title: 'Sales Funnel & Conversion Optimization' },
  { icon: <FaMapMarkedAlt />, title: 'Field Visit Planning & Execution' },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index} data-aos="zoom-in">
            <div className="icon">{skill.icon}</div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
