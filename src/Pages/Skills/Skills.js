import React, { useEffect } from 'react';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { 
  FaChartLine, 
  FaBullhorn, 
  FaCogs, 
  FaDatabase, 
  FaChartBar, 
  FaProjectDiagram, 
  FaUsers, 
  FaClipboardList, 
  FaHandshake, 
  FaComments, 
  FaSearch 
} from 'react-icons/fa';

const skillsData = [
  { icon: <FaChartLine />, title: 'Sales Data Tracking & Reporting' },
  { icon: <FaBullhorn />, title: 'Digital Marketing Tools' },
  { icon: <FaCogs />, title: 'Process Improvement' },
  { icon: <FaUsers />, title: 'Odoo CRM' },
  { icon: <FaChartBar />, title: 'Data Visualization' },
  { icon: <FaDatabase />, title: 'SQL (Basic)' },
  { icon: <FaChartBar />, title: 'Power BI' },
  { icon: <FaProjectDiagram />, title: 'Agile Methodology' },
  { icon: <FaHandshake />, title: 'Stakeholder Management' },
  { icon: <FaClipboardList />, title: 'Requirements Gathering' },
  { icon: <FaComments />, title: 'Communication' },
  { icon: <FaSearch />, title: 'Market & Trend Analysis' },
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
