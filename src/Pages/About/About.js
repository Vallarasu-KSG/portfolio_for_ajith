import React, { useEffect, useRef } from 'react';
import './About.css';
import { FaUserAlt, FaLaptopCode, FaMapMarkerAlt, FaLightbulb } from 'react-icons/fa';
import ProfilePic from '../../Assets/ProfileImg/profile-img.jpeg'; // ← Replace with your image path

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add('visible');
          observer.unobserve(aboutRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
  }, []);

  return (
    <div className="about-section" ref={aboutRef}>
      <h2 className="about-title"> About Me</h2>
      <div className="about-wrapper">
        <div className="about-image">
          <img src={ProfilePic} alt="Ajith Kumar" />
        </div>
        <div className="about-content">
          <p><FaUserAlt className="about-icon" /> I’m <strong>Ajith</strong>, a dedicated and goal-oriented Sales & Marketing professional.</p>
          <p><FaLaptopCode className="about-icon" /> Passionate about helping brands grow with data-driven strategies and digital integration.</p>
          <p><FaMapMarkerAlt className="about-icon" /> Based in <strong>Tamil Nadu</strong>, always open to opportunities in sales, marketing, and growth roles.</p>
          <p><FaLightbulb className="about-icon" /> <strong>Dynamic and forward-thinking professional</strong> with a strong foundation in business development and marketing, complemented by an MBA in Marketing & Finance.</p>
          <p>Recognized for my <strong>analytical skills</strong> and <strong>innovative problem-solving</strong> approach, I thrive in challenging environments where strategic thinking and creativity are paramount.</p>
          <p>Committed to <strong>continuous learning</strong> and leveraging <strong>new technologies</strong> to enhance business strategies and performance.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
