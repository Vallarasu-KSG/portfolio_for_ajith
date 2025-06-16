import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProfileImg from '../../Assets/ProfileImg/profile-img.png'
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
    <div className='home-container'>
      <div className="home-left-box">
        <h4 className="intro-text">Hi, I'm</h4>
        <h1 className="name-text">Ajith S</h1>
        <h3 className="role-text">Sales & Marketing Executive</h3>
        <p className="description-text">
          Helping businesses grow with smart field sales and strong customer relationships.
        </p>
        <a href='/AJITH_RESUME_MARKETING_SPECIALIST.pdf' download="AJITH_RESUME_MARKETING_SPECIALIST.pdf" className="resume-button">Download Resume</a>
      </div>
      <div className="home-right-box">
        <img
          src={ProfileImg}
          alt="Ajith Kumar"
          className="profile-image"
        />
      </div>
    </div>
    <Skills/>
    <Education/>
    <Experience/>
    <About/>
    <Contact/>
    </>
  );
};

export default Home;
