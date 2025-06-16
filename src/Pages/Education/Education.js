import React, { useEffect, useRef } from 'react';
import './Education.css';
import { FaRegCircle } from 'react-icons/fa';

const Education = () => {
  const educationRefs = useRef([]);

  const educationList = [
    {
      college: 'SRI SAIRAM ENGINEERING COLLEGE',
      degree: 'MBA (Marketing & Finance)',
      score: 'CGPA: 7.01 (First Class)',
      year: '2021 - 2023',
    },
    {
      college: 'NMS SVN COLLEGE',
      degree: 'B.Sc. Mathematics',
      score: 'Percentage: 68%',
      year: '2018 - 2021',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // remove after animation
          }
        });
      },
      { threshold: 0.2 }
    );

    educationRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
  }, []);

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Education</h2>
      <div className="timeline">
        {educationList.map((item, index) => (
          <div
            className="timeline-item animate-slide-in"
            key={index}
            ref={(el) => (educationRefs.current[index] = el)}
          >
            <div className="timeline-dot"><FaRegCircle /></div>
            <div className="timeline-content">
              <h3>{item.college}</h3>
              <p>{item.degree}</p>
              <p className="score">{item.score}</p>
              <span>{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
